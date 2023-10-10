'use client';

import { BellPlus } from 'lucide-react';
import { useRouter } from 'next/navigation';

import CardMeeting from '@/components/card-meeting';
import { Button } from '@/components/ui/button';
import { Meeting } from '@/types/meeting';

import SearchFilter from './search-filter';

interface AllMeetingsProps {
  meetings: Meeting[];
}

const AllMeetings: React.FC<AllMeetingsProps> = ({ meetings }) => {
  const router = useRouter();

  return (
    <>
      <div className='flex sm:flex-row-reverse flex-wrap justify-between items-center'>
        <Button
          className='w-full mb-3 sm:w-auto sm:mb-0'
          onClick={() => router.push('/meetings/create')}
        >
          <BellPlus className='mr-2 h-4 w-4' /> Planifică o întâlnire
        </Button>
        <SearchFilter />
      </div>

      {!meetings.length ? (
        <p className='py-6 text-center text-sm text-muted-foreground tracking-wide'>
          Nicio întâlnire planificată
        </p>
      ) : (
        <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
          {meetings.map((meeting) => (
            <CardMeeting
              key={`${meeting.title}-${meeting.id}`}
              data={meeting}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default AllMeetings;
