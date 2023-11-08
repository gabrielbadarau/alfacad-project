'use client';

import { MoreHorizontal, Trash2, Pencil, Copy } from 'lucide-react';
import { toast } from 'react-hot-toast';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

import { Row } from '@tanstack/react-table';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import DeleteModal from '@/components/delete-modal';

import { Task } from './columns';

interface DataTableRowActionsProps {
  row: Row<Task>;
}

const DataTableRowActions: React.FC<DataTableRowActionsProps> = ({ row }) => {
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [openDropdownMenu, setOpenDropdownMenu] = useState(false);
  const router = useRouter();

  const onCopy = (id: string) => {
    navigator.clipboard.writeText(`${window.location.href}/${id}`);
    toast.success('Link-ul către proiect a fost copiat.');
  };

  const onDelete = async () => {
    try {
      setLoading(true);
      await axios.delete(`/api/vacation/${row.id}`);

      router.refresh();
      toast.success('Concediu șters.');
    } catch (error) {
      toast.error('Ceva nu a mers bine.');
    } finally {
      setLoading(false);
      setOpenDeleteModal(false);
      setOpenDropdownMenu(false);
    }
  };

  return (
    <DropdownMenu
      modal={false}
      open={openDropdownMenu}
      onOpenChange={(isOpen) => setOpenDropdownMenu(isOpen)}
    >
      <DropdownMenuTrigger asChild>
        <Button
          variant='ghost'
          className='flex h-8 w-8 p-0 data-[state=open]:bg-muted'
        >
          <MoreHorizontal />
          <span className='sr-only'>Open menu</span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className='w-[160px]'>
        <DropdownMenuItem onClick={() => router.push(`/projects/${row.id}`)}>
          Edit
          <DropdownMenuShortcut>
            <Pencil className='h-4 w-4 shrink-0' />
          </DropdownMenuShortcut>
        </DropdownMenuItem>

        <DropdownMenuItem onClick={() => onCopy(row.id)}>
          Copiază linkul
          <DropdownMenuShortcut>
            <Copy className='h-4 w-4 shrink-0' />
          </DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuSeparator />

        <DropdownMenuItem
          onSelect={(e) => e.preventDefault()}
          onClick={() => setOpenDeleteModal(true)}
          className='text-red-600 hover:text-red-600'
        >
          Delete
          <DropdownMenuShortcut>
            <Trash2 className='h-4 w-4 shrink-0' />
          </DropdownMenuShortcut>
        </DropdownMenuItem>

        <DeleteModal
          isOpen={openDeleteModal}
          onClose={() => {
            setOpenDeleteModal(false);
            setOpenDropdownMenu(false);
          }}
          loading={loading}
          onConfirm={onDelete}
        />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DataTableRowActions;
