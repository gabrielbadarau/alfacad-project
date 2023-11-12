import Image from 'next/image';

import { getStandardUsers } from '@/actions/get-standard-users';
import { getMeeting } from '@/actions/get-meeting';

import MeetingForm from '../components/meeting-form';

const MeetingPage = async ({ params }: { params: { meetingId: string } }) => {
  const standardUsers = await getStandardUsers();
  const meetingData = await getMeeting(params.meetingId);

  return (
    <div className='flex flex-row gap-20 p-8 pt-6 h-full'>
      <div className='w-full space-y-4'>
        <MeetingForm initialData={meetingData} users={standardUsers} />
      </div>

      <div className='hidden xl:block'>
        <Image
          priority
          src='/meeting.svg'
          height={1300}
          width={1300}
          alt='Picture of two people shaking hands'
        />
      </div>
    </div>
  );
};

export default MeetingPage;
