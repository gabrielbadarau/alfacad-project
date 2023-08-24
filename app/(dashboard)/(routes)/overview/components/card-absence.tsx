'use client';

import { format, differenceInDays } from 'date-fns';
import { Trash2 } from 'lucide-react';
import { useState } from 'react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import DeleteModal from '@/components/delete-modal';

interface CardAbsenceProps {
  // TODO replay any
  data: any;
}

const CardAbsence: React.FC<CardAbsenceProps> = ({ data }) => {
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const days = differenceInDays(data.endDate, data.startDate) + 1;
  const unit = days > 1 ? 'zile' : 'zi';
  const datesFormat =
    days > 1
      ? `${format(data.startDate, 'MMM d')} - ${format(data.endDate, 'MMM d')}`
      : `${format(data.startDate, 'MMM d')}`;

  return (
    <>
      <DeleteModal
        isOpen={openDeleteModal}
        onClose={() => setOpenDeleteModal(false)}
        loading={loading}
        onConfirm={() => {}}
      />

      <div className='flex flex-col flex-nowrap gap-4 border-2 rounded-lg p-4 border-slate-100 min-w-[18rem]'>
        <div className='flex flex-row flex-nowrap'>
          <Avatar className='h-9 w-9'>
            <AvatarImage src={data.imageUrl} alt='Avatar' />
            <AvatarFallback className='bg-slate-800 text-white'>
              {data.firstName.charAt(0)}
              {data.lastName.charAt(0)}
            </AvatarFallback>
          </Avatar>

          <div className='pl-4 space-y-1 min-w-[13.5rem]'>
            <p className='text-sm font-medium leading-none truncate'>
              {data.firstName} {data.lastName}
            </p>
            <p className='text-sm text-muted-foreground truncate'>
              {data.email}
            </p>
          </div>
        </div>

        <div className='flex flex-row flex-nowrap justify-between'>
          <div className='flex flex-col flex-nowrap gap-1'>
            <p className='text-sm font-medium leading-none'>{datesFormat}</p>
            <p className='text-sm text-muted-foreground'>
              {days} {unit}
            </p>
          </div>

          <Button
            variant='ghost'
            className='flex h-8 w-12 shrink-0 text-slate-700'
            onClick={() => setOpenDeleteModal(true)}
          >
            <Trash2 className='shrink-0 h-5 w-5' />
          </Button>
        </div>
      </div>
    </>
  );
};

export default CardAbsence;
