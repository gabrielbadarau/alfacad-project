import Client from '@/components/client';
import UpcomingAbsences from './components/upcoming-absences';
import UpcomingMeetings from './components/upcoming-meetings';

const OverviewPage = () => {
  return (
    <div className='flex-1 space-y-4 p-8 pt-6'>
      <Client>
        <UpcomingMeetings />
        <UpcomingAbsences />
      </Client>
    </div>
  );
};

export default OverviewPage;
