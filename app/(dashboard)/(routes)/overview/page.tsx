import { BellPlus, CalendarPlus } from 'lucide-react';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from '@/components/ui/card';
import { Heading } from '@/components/heading';

import UpcomingAbsences from './components/upcomingAbsences';
import UpcomingMeetings from './components/upcomingMeetings';

const OverviewPage = () => {
  return (
    <div className='flex-1 space-y-4 p-8 pt-6'>
      <Heading title='Următoarele întâlniri' icon={BellPlus} />
      <UpcomingMeetings />

      <div className='grid'>
        <Card>
          <CardHeader>
            <Heading title='Concedii' icon={CalendarPlus} />
            <CardDescription>Următoarele perioade de concediu</CardDescription>
          </CardHeader>
          <CardContent>
            <UpcomingAbsences />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default OverviewPage;
