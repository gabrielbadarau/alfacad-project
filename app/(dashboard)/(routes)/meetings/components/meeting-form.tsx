'use client';

import * as z from 'zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams, useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import axios from 'axios';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Heading } from '@/components/heading';
import { Textarea } from '@/components/ui/textarea';
import DatePicker from '@/components/date-picker';
import TimePicker from '@/components/time-picker';
import MultiUserSelect from '@/components/multi-user-select';

import { zodResolver } from '@hookform/resolvers/zod';
import { User } from '@/types/user';

const formSchema = z.object({
  title: z.string().min(1, 'Acest câmp este obligatoriu.'),
  date: z.date({ required_error: 'Acest câmp este obligatoriu.' }),
  time: z
    .string({ required_error: 'Acest câmp este obligatoriu.' })
    .superRefine((value, ctx) => {
      const time = value.split(':');

      if (!time[0]) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: 'Te rugăm să selectezi ora.',
        });
      }

      if (!time[1]) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: 'Te rugăm să selectezi minutele.',
        });
      }
    }),
  users: z.string().array().min(1, 'Alege cel puțin o persoană.'),
  address: z.string().min(1, 'Acest câmp este obligatoriu.'),
  description: z.string().min(1, 'Acest câmp este obligatoriu.'),
});

interface MeetingFormProps {
  // TODO replace any
  initialData: any;
  users: User[];
}

const MeetingForm: React.FC<MeetingFormProps> = ({ initialData, users }) => {
  const params = useParams();
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const title = initialData
    ? 'Editează întâlnirea'
    : 'Creează o nouă întâlnire';
  // const toastMessage = initialData
  //   ? 'Billboard updated.'
  //   : 'Billboard created.';
  const action = initialData ? 'Salvează modificările' : 'Creează';

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData || {
      title: '',
      description: '',
      address: '',
      users: [],
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      setLoading(true);

      await axios.post('/api/meeting', data);

      router.refresh();
      router.push(`/overview`);
      toast.success('Intâlnire planificată.');
    } catch (error) {
      toast.error('Ceva nu a mers bine.');
    } finally {
      setLoading(false);
      form.reset();
    }
  };

  return (
    <>
      <Heading title={title} />

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
          <div className='grid gap-4 py-4'>
            <FormField
              control={form.control}
              name='title'
              render={({ field }) => (
                <FormItem className='grid gap-1'>
                  <FormLabel>Titlu</FormLabel>
                  <FormControl>
                    <Input disabled={loading} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='date'
              render={({ field }) => (
                <FormItem className='grid gap-1'>
                  <FormLabel>Alege data</FormLabel>
                  <FormControl>
                    <DatePicker
                      value={field.value}
                      onChange={field.onChange}
                      disabled={loading}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className='flex flex-wrap gap-4'>
              <FormField
                control={form.control}
                name='time'
                render={({ field }) => (
                  <FormItem className=''>
                    <FormLabel>Alege ora</FormLabel>
                    <FormControl>
                      <TimePicker
                        value={field.value}
                        onChange={field.onChange}
                        disabled={loading}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name='users'
                render={({ field }) => (
                  <FormItem className='flex-1'>
                    <FormLabel htmlFor='users'>Alege participanții</FormLabel>
                    <FormControl>
                      <MultiUserSelect
                        id='users'
                        onChange={field.onChange}
                        values={field.value}
                        options={users}
                        disabled={loading}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name='address'
              render={({ field }) => (
                <FormItem className='grid gap-1'>
                  <FormLabel>Locul întâlnirii</FormLabel>
                  <FormControl>
                    <Input
                      autoComplete='address'
                      disabled={loading}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='description'
              render={({ field }) => (
                <FormItem className='grid gap-1'>
                  <FormLabel>Descriere</FormLabel>
                  <FormControl>
                    <Textarea
                      className='h-[120px]'
                      disabled={loading}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className='space-x-2 flex items-center justify-end w-full'>
            <Button
              className='sm:w-auto w-full'
              disabled={loading}
              type='submit'
            >
              {action}
            </Button>
          </div>
        </form>
      </Form>
    </>
  );
};

export default MeetingForm;
