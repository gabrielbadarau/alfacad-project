'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import * as z from 'zod';

import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Modal } from '@/components/modal';
import RangeDatePicker from '@/components/range-date-picker';

const formSchema = z.object({
  range: z
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
            name='range'
            render={({ field }) => (
              <div className='grid gap-4 py-4'>
                <FormItem className='flex flex-col'>
                  <FormLabel>Alege perioada</FormLabel>
                  <RangeDatePicker field={field} />
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
