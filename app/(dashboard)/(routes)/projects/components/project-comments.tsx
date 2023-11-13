'use client';

import { useEffect, useRef, useState } from 'react';
import { format } from 'date-fns';
import { useForm } from 'react-hook-form';
import { useParams, useRouter } from 'next/navigation';
import * as z from 'zod';
import axios from 'axios';
import toast from 'react-hot-toast';

import { useUser } from '@clerk/nextjs';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import UserBullet from '@/components/user-bullet';
import { Textarea } from '@/components/ui/textarea';
import { zodResolver } from '@hookform/resolvers/zod';
import { ProjectComment } from '@prisma/client';
import { User } from '@/types/user';
import { cn } from '@/lib/utils';

const formSchema = z.object({
  comment: z.string().min(1, 'Acest câmp este obligatoriu.'),
});

interface ProjectCommentsProps {
  comments: ProjectComment[] | undefined;
  users: User[];
}

const ProjectComments: React.FC<ProjectCommentsProps> = ({
  comments,
  users,
}) => {
  const { user } = useUser();
  const [loading, setLoading] = useState(false);
  const params = useParams();
  const router = useRouter();
  const bottomRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () =>
    bottomRef.current?.scrollTo({
      top: bottomRef.current?.scrollHeight,
      behavior: 'smooth',
    });

  useEffect(() => {
    scrollToBottom();
  }, [comments]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      comment: '',
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      setLoading(true);

      await axios.post(`/api/comment`, {
        comment: data.comment,
        projectId: params.projectId,
      });

      form.reset();
      router.refresh();
      toast.success('Mesaj postat');
    } catch (error) {
      toast.error('Ceva nu a mers bine.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Card
        ref={bottomRef}
        className='p-2 h-[calc(100vh-26rem)] overflow-auto mb-4'
      >
        {!comments ? (
          <p className='py-6 text-center text-sm text-muted-foreground tracking-wide'>
            Niciun detaliu găsit
          </p>
        ) : (
          comments.map((comment) => {
            if (user) {
              const author = users.find((user) => user.id === comment.userId);
              const alignStyle =
                user.id === comment.userId ? 'right-comment' : 'left-comment';
              const formattedCreatedDate = format(
                comment.createdAt,
                'dd/MM/yy HH:mm'
              );
              const userData = {
                emailAddress: user.emailAddresses[0].emailAddress,
                firstName: user.firstName,
                lastName: user.lastName,
                id: user.id,
                imageUrl: user.imageUrl,
              };

              return (
                <div key={comment.id} className={alignStyle}>
                  <div
                    className={cn(
                      'flex flex-nowrap justify-center items-center gap-1',
                      alignStyle === 'right-comment'
                        ? 'flex-row-reverse'
                        : 'flex-row'
                    )}
                  >
                    <UserBullet user={userData} />
                    <div
                      className={cn(
                        'flex flex-col',
                        alignStyle === 'right-comment'
                          ? 'items-end'
                          : 'items-start'
                      )}
                    >
                      <span className='userId'>
                        {author?.firstName} {author?.lastName}
                      </span>
                      <span className='createdAt'>{formattedCreatedDate}</span>
                    </div>
                  </div>
                  <span className='comment'>{comment.comment}</span>
                </div>
              );
            }
          })
        )}
      </Card>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
          <div className='flex flex-wrap items-center justify-end w-full gap-3'>
            <FormField
              control={form.control}
              name='comment'
              render={({ field }) => (
                <FormItem className='grid gap-1 w-full'>
                  <FormControl>
                    <Textarea disabled={loading} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              className='sm:w-auto w-full'
              disabled={loading || !form.formState.isDirty}
              type='submit'
            >
              Postează
            </Button>
          </div>
        </form>
      </Form>
    </>
  );
};
export default ProjectComments;
