import { getMeetings } from '@/actions/get-meetings';

import AllMeetings from './components/all-meetings';

export const revalidate = 0;

interface MeetingsPageProps {
  searchParams: {
    search: string;
  };
}

const MeetingsPage: React.FC<MeetingsPageProps> = async ({ searchParams }) => {
  const meetings = await getMeetings(false, searchParams.search);

  return (
    <div className='space-y-4 p-8 pt-6'>
      <AllMeetings meetings={meetings} />
    </div>
  );
};

export default MeetingsPage;
