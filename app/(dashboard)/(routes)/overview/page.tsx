import { getVacations } from '@/actions/get-vacations';

import UpcomingAbsences from './components/upcoming-absences';
import UpcomingMeetings from './components/upcoming-meetings';

export const revalidate = 0;

const OverviewPage = async () => {
  const vacations = await getVacations();

  return (
    <div className='space-y-4 p-8 pt-6'>
      <UpcomingMeetings />
      <UpcomingAbsences vacations={vacations} />
    </div>
  );
};

export default OverviewPage;
