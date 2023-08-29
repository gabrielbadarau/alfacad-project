'use client';

import { format } from 'date-fns';
import { ro } from 'date-fns/locale';
import {
  Calendar,
  MapPin,
  Clock,
  ChevronRight,
  Pencil,
  Trash2,
  MoreHorizontal,
} from 'lucide-react';
import { useState } from 'react';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
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

interface CardMeetingProps {
  // TODO replace any
  data: any;
}

const CardMeeting: React.FC<CardMeetingProps> = ({ data }) => {
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const formatDate = format(data.date, 'd MMMM', { locale: ro });

  return (
    <>
      <DeleteModal
        isOpen={openDeleteModal}
        onClose={() => setOpenDeleteModal(false)}
        loading={loading}
        onConfirm={() => {}}
      />

      <Card className='min-w-[21rem]'>
        <CardHeader className='flex flex-row items-center justify-between py-4'>
          <CardTitle className='truncate py-0.5'>{data.title}</CardTitle>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant='ghost'
                className='ml-2 flex h-8 w-12 p-0 data-[state=open]:bg-muted shrink-0 !mt-0'
              >
                <ChevronRight className='shrink-0 h-5 w-5' />
                <span className='sr-only'>Open menu</span>
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent className='w-[160px]'>
              <DropdownMenuItem className='cursor-pointer'>
                Detalii
                <DropdownMenuShortcut>
                  <MoreHorizontal className='h-4 w-4 shrink-0' />
                </DropdownMenuShortcut>
              </DropdownMenuItem>

              <DropdownMenuItem className='cursor-pointer'>
                Editează
                <DropdownMenuShortcut>
                  <Pencil className='h-4 w-4 shrink-0' />
                </DropdownMenuShortcut>
              </DropdownMenuItem>

              <DropdownMenuSeparator />

              <DropdownMenuItem
                onClick={() => setOpenDeleteModal(true)}
                className='text-red-600 hover:text-red-600 cursor-pointer'
              >
                Șterge
                <DropdownMenuShortcut>
                  <Trash2 className='h-4 w-4 shrink-0' />
                </DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </CardHeader>

        <Separator />

        <CardContent className='py-4 flex flex-col gap-2'>
          <div className='flex flex-row gap-2'>
            <Calendar className='shrink-0' />
            <p className='tracking-tighter'>{formatDate}</p>
          </div>
          <div className='flex flex-row gap-2'>
            <Clock className='shrink-0' />
            <p className='tracking-tighter'>{data.time}</p>
          </div>
          <div className='flex flex-row gap-2'>
            <MapPin className='shrink-0' />
            <p className='tracking-tighter truncate'>{data.address}</p>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default CardMeeting;
