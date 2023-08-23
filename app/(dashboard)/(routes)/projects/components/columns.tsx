'use client';

import { FolderPlus } from 'lucide-react';

import { ColumnDef } from '@tanstack/react-table';
import { Button } from '@/components/ui/button';

import { statuses } from './utils';
import { DataTableRowActions } from './data-table-row-actions';

export type Task = {
  id: string;
  title: string;
  status: 'in progress' | 'backlog' | 'todo' | 'canceled' | 'done';
  label: string;
  priority: string;
};

export const columns: ColumnDef<Task>[] = [
  {
    accessorKey: 'title',
    header: 'Title',
    cell: ({ row }) => (
      <div className='flex space-x-2'>
        <span className='font-medium'>{row.getValue('title')}</span>
      </div>
    ),
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => {
      const status = statuses.find(
        (status) => status.value === row.getValue('status')
      );

      if (!status) {
        return null;
      }

      return (
        <div className='flex items-center'>
          {status.icon && <status.icon className='mr-2 h-4 w-4' />}
          <span>{status.label}</span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    header: () => (
      <div className='text-right'>
        <Button variant='outline' className='h-8 p-2 lg:p-3 '>
          <FolderPlus className='h-4 w-4 shrink-0' />
        </Button>
      </div>
    ),
    id: 'actions',
    cell: ({ row }) => (
      <div className='flex justify-end'>
        <DataTableRowActions row={row} />
      </div>
    ),
  },
];
