'use client';

import { MoreHorizontal, Trash2, Pencil, Copy } from 'lucide-react';
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

interface DataTableRowActionsProps<TData> {
  row: Row<TData>;
}

export function DataTableRowActions<TData>({
  row,
}: DataTableRowActionsProps<TData>) {
  return (
    <DropdownMenu>
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
        <DropdownMenuItem>
          Edit
          <DropdownMenuShortcut>
            <Pencil className='h-4 w-4 shrink-0' />
          </DropdownMenuShortcut>
        </DropdownMenuItem>

        <DropdownMenuItem>
          Copy link
          <DropdownMenuShortcut>
            <Copy className='h-4 w-4 shrink-0' />
          </DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuSeparator />

        <DropdownMenuItem className='text-red-600 hover:text-red-600'>
          Delete
          <DropdownMenuShortcut>
            <Trash2 className='h-4 w-4 shrink-0' />
          </DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}