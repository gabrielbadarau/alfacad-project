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
import { ProjectInfo } from '@/types/project';
import { useUser } from '@clerk/nextjs';

interface DataTableRowActionsProps {
  row: Row<ProjectInfo>;
}

const DataTableRowActions: React.FC<DataTableRowActionsProps> = ({ row }) => {
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [openDropdownMenu, setOpenDropdownMenu] = useState(false);
  const router = useRouter();
  const { user } = useUser();

  const onCopy = (id: string) => {
    navigator.clipboard.writeText(`${window.location.href}/${id}`);
    toast.success('Link-ul către lucrare a fost copiat.');
  };

  const onDelete = async () => {
    try {
      setLoading(true);
      await axios.delete(`/api/project/${row.original.id}`);

      router.refresh();
      toast.success('Lucrare ștearsă.');
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
        <DropdownMenuItem
          onClick={() => router.push(`/projects/${row.original.id}`)}
        >
          Editează
          <DropdownMenuShortcut>
            <Pencil className='h-4 w-4 shrink-0' />
          </DropdownMenuShortcut>
        </DropdownMenuItem>

        <DropdownMenuItem onClick={() => onCopy(row.original.id)}>
          Copiază linkul
          <DropdownMenuShortcut>
            <Copy className='h-4 w-4 shrink-0' />
          </DropdownMenuShortcut>
        </DropdownMenuItem>

        {(user?.publicMetadata.premiumUser as boolean) && (
          <>
            <DropdownMenuSeparator />

            <DropdownMenuItem
              onSelect={(e) => e.preventDefault()}
              onClick={() => setOpenDeleteModal(true)}
              className='text-red-600 hover:text-red-600'
            >
              Șterge
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
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DataTableRowActions;
