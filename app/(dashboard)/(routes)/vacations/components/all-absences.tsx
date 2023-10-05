'use client';

import { CalendarPlus } from 'lucide-react';
import { useState } from 'react';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import CardAbsence from '@/components/card-absence';
import { Vacation } from '@/types/vacation';
import { User } from '@/types/user';

import CreateAbsenceModal from './create-absence-modal';
import Filter from './filter';

interface AllAbsencesProps {
  vacations: Vacation[];
  users: User[];
}

const AllAbsences: React.FC<AllAbsencesProps> = ({ vacations, users }) => {
  const [isOpenCreateModal, setIsOpenCreateModal] = useState(false);

  return (
    <>
      <CreateAbsenceModal
        isOpen={isOpenCreateModal}
        onClose={() => setIsOpenCreateModal(false)}
      />
      <div className='flex sm:flex-row-reverse flex-wrap justify-between items-center'>
        <Button
          className='w-full mb-3 sm:w-auto sm:mb-0'
          onClick={() => setIsOpenCreateModal(true)}
        >
          <CalendarPlus className='mr-2 h-4 w-4' /> Planifică un concediu
        </Button>
        <Filter users={users} />
      </div>

      <Card>
        <CardContent className='p-6'>
          {vacations.length === 0 ? (
            <p className='py-6 text-center text-sm text-muted-foreground tracking-wide'>
              Niciun concediu planificat
            </p>
          ) : (
            <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
              {vacations.map((data) => (
                <CardAbsence key={`${data.lastName}-${data.id}`} data={data} />
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </>
  );
};

export default AllAbsences;
