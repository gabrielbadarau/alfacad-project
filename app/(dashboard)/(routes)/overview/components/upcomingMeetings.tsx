import { format } from 'date-fns';
import { ro } from 'date-fns/locale';
import { ExternalLink, Calendar, MapPin, Clock } from 'lucide-react';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const mockData = [
  {
    title: 'Nostra',
    date: new Date('2016-12-23'),
    time: '14:37',
    address: '18 8th Street',
  },
  {
    title: 'Nalesuada',
    date: new Date('2021-07-03'),
    time: '09:20',
    address: '71936 Meadow Lane',
  },
  {
    title: 'Nuis',
    date: new Date('2010-05-13'),
    time: '10:21',
    address: '80824 Lake Street',
  },
  {
    title: 'Vgestas',
    date: new Date('2018-02-02'),
    time: '13:55',
    address: '5620 Hillcrest Drive',
  },
];

const UpcomingMeetings = () => {
  return (
    <div className='grid gap-4 md:grid-cols-2 xl:grid-cols-4'>
      {mockData.map((data) => {
        const formatDate = format(data.date, 'd MMMM', { locale: ro });

        return (
          <Card key={`${data.title}-${data.time}`}>
            <CardHeader className='flex flex-row items-center justify-between py-4'>
              <CardTitle>{data.title}</CardTitle>
              <ExternalLink className='shrink-0' />
            </CardHeader>

            <Separator />

            <CardContent className='py-4 flex flex-col gap-2'>
              <div className='flex flex-row gap-2'>
                <Calendar className='shrink-0' />
                <p className='tracking-tighter'>{formatDate}</p>
              </div>
              <div className='flex flex-row gap-2'>
                <Clock className='shrink-0' />
                <p className='tracking-tighter'>{data.time}</p>
              </div>
              <div className='flex flex-row gap-2'>
                <MapPin className='shrink-0' />
                <p className='tracking-tighter'>{data.address}</p>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default UpcomingMeetings;