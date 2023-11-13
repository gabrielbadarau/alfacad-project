'use client';

import { BellPlus } from 'lucide-react';
import { useRouter } from 'next/navigation';

import CardMeeting from '@/components/card-meeting';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Meeting } from '@/types/meeting';
import { useUser } from '@clerk/nextjs';
import { cn } from '@/lib/utils';

import SearchFilter from './search-filter';
import Pagination from './pagination';

interface AllMeetingsProps {
  meetings: Meeting[];
  totalMeetings: number;
}

const AllMeetings: React.FC<AllMeetingsProps> = ({
  meetings,
  totalMeetings,
}) => {
  const router = useRouter();
  const { user } = useUser();

  return (
    <>
      <div
        className={cn(
          'flex flex-wrap justify-between items-center',
          (user?.publicMetadata.premiumUser as boolean) && 'sm:flex-row-reverse'
        )}
      >
        {(user?.publicMetadata.premiumUser as boolean) && (
          <Button
            className='w-full mb-3 sm:w-auto sm:mb-0'
            onClick={() => router.push('/meetings/create')}
          >
            <BellPlus className='mr-2 h-4 w-4' /> Planifică o întâlnire
          </Button>
        )}

        <SearchFilter />
      </div>
      <Card>
        <CardContent className='p-6'>
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
        </CardContent>
      </Card>
      <Pagination totalMeetings={totalMeetings} />{' '}
    </>
  );
};

export default AllMeetings;
