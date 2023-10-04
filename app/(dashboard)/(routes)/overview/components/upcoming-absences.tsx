'use client';

import { CalendarPlus } from 'lucide-react';
import { useState } from 'react';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from '@/components/ui/card';
import { Heading } from '@/components/heading';
import { Vacation } from '@/types/vacation';

import CardAbsence from './card-absence';
import CreateAbsenceModal from './create-absence-modal';

interface UpcomingAbsencesProps {
  vacations: Vacation[];
}

const UpcomingAbsences: React.FC<UpcomingAbsencesProps> = ({ vacations }) => {
  const [isOpenCreateModal, setIsOpenCreateModal] = useState(false);

  return (
    <>
      <CreateAbsenceModal
        isOpen={isOpenCreateModal}
        onClose={() => setIsOpenCreateModal(false)}
      />

      <div className='grid'>
        <Card>
          <CardHeader>
            <Heading
              title='Concedii'
              icon={CalendarPlus}
              onClick={() => setIsOpenCreateModal(true)}
            />
            <CardDescription>Următoarele perioade de concediu</CardDescription>
          </CardHeader>
          <CardContent>
            {vacations.length === 0 ? (
              <p className='py-6 text-center text-sm text-muted-foreground tracking-wide'>
                Niciun concediu planificat
              </p>
            ) : (
              <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                {vacations.map((data) => (
                  <CardAbsence
                    key={`${data.lastName}-${data.startDate.getTime()}`}
                    data={data}
                  />
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default UpcomingAbsences;
