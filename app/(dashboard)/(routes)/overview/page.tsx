import { getVacations } from '@/actions/get-vacations';
import { getMeetings } from '@/actions/get-meetings';

import UpcomingAbsences from './components/upcoming-absences';
import UpcomingMeetings from './components/upcoming-meetings';

export const revalidate = 0;

const OverviewPage = async () => {
  const vacations = await getVacations();
  const meetings = await getMeetings();

  return (
    <div className='space-y-4 p-8 pt-6'>
      <UpcomingMeetings meetings={meetings} />
      <UpcomingAbsences vacations={vacations} />
    </div>
  );
};

export default OverviewPage;
