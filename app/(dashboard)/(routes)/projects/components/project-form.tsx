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
import DeleteModal from '@/components/delete-modal';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { zodResolver } from '@hookform/resolvers/zod';
import { ProjectInfo } from '@/types/project';

import { projectStatuses, projectTypes } from './utils';

const formSchema = z.object({
  name: z.string().min(1, 'Acest câmp este obligatoriu.'),
  type: z.string({ required_error: 'Acest câmp este obligatoriu.' }),
  status: z.string({ required_error: 'Acest câmp este obligatoriu.' }),
});

interface ProjectFormProps {
  initialData: ProjectInfo | undefined;
}

const ProjectForm: React.FC<ProjectFormProps> = ({ initialData }) => {
  const params = useParams();
  const router = useRouter();

  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const toastMessage = initialData ? 'Lucrare modificată.' : 'Lucrare creată.';
  const action = initialData ? 'Salvează modificările' : 'Creează';

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData || {
      name: '',
      type: undefined,
      status: undefined,
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      setLoading(true);

      if (initialData) {
        await axios.patch(`/api/project/${params.projectId}`, data);
      } else {
        await axios.post(`/api/project`, data);
      }

      form.reset();
      router.push(`/projects`);
      router.refresh();
      toast.success(toastMessage);
    } catch (error) {
      toast.error('Ceva nu a mers bine.');
    } finally {
      setLoading(false);
    }
  };

  const onDelete = async () => {
    try {
      setLoading(true);
      await axios.delete(`/api/project/${params.projectId}`);

      router.push(`/projects`);
      router.refresh();
      toast.success('Lucrare ștearsă.');
    } catch (error) {
      toast.error('Ceva nu a mers bine.');
    } finally {
      setLoading(false);
      setOpenDeleteModal(false);
    }
  };

  return (
    <>
      <DeleteModal
        isOpen={openDeleteModal}
        onClose={() => setOpenDeleteModal(false)}
        loading={loading}
        onConfirm={onDelete}
      />

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
          <div className='grid gap-4 py-4'>
            <FormField
              control={form.control}
              name='name'
              render={({ field }) => (
                <FormItem className='grid gap-1'>
                  <FormLabel>Nume</FormLabel>
                  <FormControl>
                    <Input disabled={loading} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='type'
              render={({ field }) => (
                <FormItem className='grid gap-1'>
                  <FormLabel>Tip lucrare</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder='Selectează tipul lucrării' />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {projectTypes.map((projectType) => (
                        <SelectItem
                          key={projectType.value}
                          value={projectType.value}
                        >
                          {projectType.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='status'
              render={({ field }) => (
                <FormItem className='grid gap-1'>
                  <FormLabel>Status</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder='Selectează statusul lucrării' />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {projectStatuses.map((projectStatus) => (
                        <SelectItem
                          className='flex flex-row'
                          key={projectStatus.value}
                          value={projectStatus.value}
                        >
                          {projectStatus.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className='space-y-3 sm:space-y-0 sm:space-x-3 flex flex-wrap items-center justify-end w-full'>
            {initialData && (
              <Button
                type='button'
                variant='destructive'
                className='sm:w-auto w-full'
                onClick={() => setOpenDeleteModal(true)}
                disabled={loading}
              >
                Șterge
              </Button>
            )}
            <Button
              className='sm:w-auto w-full'
              disabled={loading || !form.formState.isDirty}
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

export default ProjectForm;
