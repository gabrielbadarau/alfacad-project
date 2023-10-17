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
  Users,
  PencilLine,
} from 'lucide-react';
import { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

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
import UserBullet from '@/components/user-bullet';
import Ribbon from '@/components/ribbon';
import { Meeting } from '@/types/meeting';

interface CardMeetingProps {
  data: Meeting;
}

const CardMeeting: React.FC<CardMeetingProps> = ({ data }) => {
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const formatDate = format(data.date, 'd MMMM yyyy', { locale: ro });

  const onDelete = async () => {
    try {
      setLoading(true);
      await axios.delete(`/api/meeting/${data.id}`);
      toast.success('Întâlnire ștearsă.');
    } catch (error) {
      toast.error('Ceva nu a mers bine.');
    } finally {
      setLoading(false);
      setOpenDeleteModal(false);
      router.refresh();
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

      <Card className='min-w-[21rem] relative'>
        <Ribbon startDate={data.date} endDate={data.date} />
        <CardHeader className='flex flex-row items-center justify-between py-4'>
          <CardTitle className='truncate py-0.5'>{data.title}</CardTitle>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant='outline'
                className='ml-2 flex h-8 w-12 p-0 data-[state=open]:bg-muted shrink-0 !mt-0'
              >
                <ChevronRight className='shrink-0 h-5 w-5' />
                <span className='sr-only'>Open menu</span>
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent className='w-[160px]'>
              <DropdownMenuItem
                className='cursor-pointer'
                onClick={() => router.push(`/meetings/${data.id}`)}
              >
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
            <Users className='shrink-0' />
            {data.users.map((user) => (
              <UserBullet key={user.id} user={user} />
            ))}
          </div>
          <div className='flex flex-row gap-2'>
            <MapPin className='shrink-0' />
            <p className='tracking-tighter truncate'>{data.address}</p>
          </div>
          <div className='flex flex-row gap-2'>
            <PencilLine className='shrink-0' />
            <p>{data.description}</p>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default CardMeeting;
