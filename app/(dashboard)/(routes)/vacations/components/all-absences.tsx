'use client';

import { CalendarPlus } from 'lucide-react';
import { useState } from 'react';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import CardAbsence from '@/components/card-absence';
import MultiUserSelect from '@/components/multi-user-select';
import { Vacation } from '@/types/vacation';
import { User } from '@/types/user';
import { Label } from '@/components/ui/label';

import CreateAbsenceModal from './create-absence-modal';

interface AllAbsencesProps {
  vacations: Vacation[];
  users: User[];
}

const AllAbsences: React.FC<AllAbsencesProps> = ({ vacations, users }) => {
  const [isOpenCreateModal, setIsOpenCreateModal] = useState(false);
  const [selectedUsers, setSelectedUsers] = useState<string[]>([]);
  const filterByUser = (e: string[]) => {
    setSelectedUsers(e);
  };

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
        <div className='w-full sm:w-auto'>
          <Label className='block mb-1.5'>Filtrează după utilizator</Label>
          <div className='w-full sm:min-w-[20.5rem]'>
            <MultiUserSelect
              onChange={filterByUser}
              values={selectedUsers}
              options={users}
            />
          </div>
        </div>
      </div>

      <Card>
        <CardContent className='p-6'>
          {vacations.length === 0 ? (
            <p className='py-6 text-center text-sm text-muted-foreground tracking-wide'>
              Niciun concediu planificat
            </p>
          ) : (
            <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
              {vacations.map((data, index) => (
                <CardAbsence
                  key={`${data.lastName}-${data.startDate}-${index}`}
                  data={data}
                />
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </>
  );
};

export default AllAbsences;
