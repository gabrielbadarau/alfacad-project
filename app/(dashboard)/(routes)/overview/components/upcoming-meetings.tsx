'use client';

import { BellPlus } from 'lucide-react';
import { useRouter } from 'next/navigation';

import { Heading } from '@/components/heading';
import CardMeeting from '@/components/card-meeting';
import { Meeting } from '@/types/meeting';

interface UpcomingMeetingsProps {
  meetings: Meeting[];
}

const UpcomingMeetings: React.FC<UpcomingMeetingsProps> = ({ meetings }) => {
  const router = useRouter();

  return (
    <>
      <Heading
        title='Următoarele întâlniri'
        icon={BellPlus}
        onClick={() => router.push('/overview/meeting/new')}
      />

      <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
        {meetings.map((meeting) => (
          <CardMeeting key={`${meeting.title}-${meeting.id}`} data={meeting} />
        ))}
      </div>
    </>
  );
};

export default UpcomingMeetings;
