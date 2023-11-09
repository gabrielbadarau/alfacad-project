'use client';

import { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';

import { zodResolver } from '@hookform/resolvers/zod';

import { mockComments } from './mockCommentsData';

const formSchema = z.object({
  comments: z.string().min(1, 'Acest câmp este obligatoriu.'),
});

const ProjectComments = () => {
  const comments = mockComments;
  const alignStyle = 'right-comment';

  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () =>
    bottomRef.current?.scrollTo({
      top: bottomRef.current?.scrollHeight,
      behavior: 'smooth',
    });

  useEffect(() => {
    scrollToBottom();
  }, []);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      comments: '',
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      // setLoading(true);
      // if (initialData) {
      //   await axios.patch(`/api/meeting/${params.meetingId}`, data);
      // } else {
      //   await axios.post(`/api/meeting`, data);
      // }
      // form.reset();
      // router.push(`/meetings`);
      // router.refresh();
      // toast.success(toastMessage);
    } catch (error) {
      // toast.error('Ceva nu a mers bine.');
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
        {comments.map((comment) => (
          <div key={comment.id} className={alignStyle}>
            <span className='userId'>Gabriel Badarau</span>
            <span className='createdAt'>{comment.createdAt}</span>
            <span className='comment'>{comment.comment}</span>
          </div>
        ))}
      </Card>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
          <div className='flex flex-wrap items-center justify-end w-full gap-3'>
            <FormField
              control={form.control}
              name='comments'
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
