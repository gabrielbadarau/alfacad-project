import { getMeetings } from '@/actions/get-meetings';

import AllMeetings from './components/all-meetings';

export const revalidate = 0;

interface MeetingsPageProps {
  searchParams: {
    search: string;
    page: number;
  };
}

const MeetingsPage: React.FC<MeetingsPageProps> = async ({ searchParams }) => {
  const { meetings, totalDocuments } = await getMeetings(
    false,
    searchParams.search,
    searchParams.page
  );
  console.log('meeting get');
  console.log(meetings);

  return (
    <div className='space-y-4 p-8 pt-6'>
      <AllMeetings meetings={meetings} totalMeetings={totalDocuments} />
    </div>
  );
};

export default MeetingsPage;
