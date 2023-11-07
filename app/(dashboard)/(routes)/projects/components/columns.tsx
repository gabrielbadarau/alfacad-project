'use client';

import { ColumnDef } from '@tanstack/react-table';
import Client from '@/components/client';

import { projectStatuses } from './utils';
import DataTableRowActions from './data-table-row-actions';
import NewProjectButton from './new-project-button';

export type Task = {
  id: string;
  name: string;
  status: string;
  label: string;
  priority: string;
};

export const columns: ColumnDef<Task>[] = [
  {
    accessorKey: 'name',
    header: 'Nume',
    cell: ({ row }) => (
      <div className='flex space-x-2'>
        <span className='font-medium'>{row.getValue('name')}</span>
      </div>
    ),
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => {
      const status = projectStatuses.find(
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
    header: NewProjectButton,
    id: 'actions',
    cell: ({ row }) => (
      <div className='flex justify-end'>
        <Client>
          <DataTableRowActions row={row} />
        </Client>
      </div>
    ),
  },
];
