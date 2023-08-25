'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';
import * as z from 'zod';

import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Modal } from '@/components/modal';
import { cn } from '@/lib/utils';

const formSchema = z.object({
  rangeAbsence: z
    .object(
      {
        from: z.date(),
        to: z.date().optional(),
      },
      {
        required_error: 'Acest câmp este obligatoriu.',
      }
    )
    .superRefine((values, ctx) => {
      if (!values.to) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: 'Te rugăm sa selectezi o dată de final',
        });
      }
    }),
});

interface CreateAbsenceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CreateAbsenceModal: React.FC<CreateAbsenceModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  console.log(form.formState.errors);

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);
    // to reset the form when done and to close it

    onClose();
    form.reset();
    router.refresh();
    // try {
    //   setLoading(true);
    //   const response = await axios.post('/api/stores', values);
    //   window.location.assign(`/${response.data.id}`);
    // } catch (error) {
    //   toast.error('Something went wrong');
    // } finally {
    //   setLoading(false);
    // }
  };

  return (
    <Modal
      title='Concediu'
      description='Aici poți crea o nouă perioadă de concediu care va fi afișată pe pagina de dashboard tuturor utilizatorilor.'
      isOpen={isOpen}
      onClose={onClose}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
          <FormField
            control={form.control}
            name='rangeAbsence'
            render={({ field }) => (
              <div className='grid gap-4 py-4'>
                <FormItem className='flex flex-col'>
                  <FormLabel>Alege perioada</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={'outline'}
                          className={cn(
                            'w-full pl-3 text-left font-normal',
                            !field.value && 'text-muted-foreground'
                          )}
                        >
                          {field.value?.from ? (
                            field.value?.to ? (
                              <>
                                {format(field.value.from, 'LLL dd, y')} -{' '}
                                {format(field.value.to, 'LLL dd, y')}
                              </>
                            ) : (
                              format(field.value.from, 'LLL dd, y')
                            )
                          ) : null}
                          <CalendarIcon className='ml-auto h-4 w-4 opacity-50' />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className='w-auto p-0' align='start'>
                      <Calendar
                        initialFocus
                        mode='range'
                        selected={field.value}
                        onSelect={field.onChange}
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              </div>
            )}
          />
          <div className='space-x-2 flex items-center justify-end w-full'>
            <Button
              className='sm:w-auto w-full'
              disabled={loading}
              type='submit'
            >
              Creează
            </Button>
          </div>
        </form>
      </Form>
    </Modal>
  );
};

export default CreateAbsenceModal;
