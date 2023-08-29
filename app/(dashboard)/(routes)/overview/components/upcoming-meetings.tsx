'use client';

import { BellPlus } from 'lucide-react';
import { useRouter } from 'next/navigation';

import { Heading } from '@/components/heading';

import CardMeeting from './card-meeting';

const mockData = [
  {
    title: 'NostraNostraNostraNostraNostraNostra',
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
    address: '80824 Lake Street 80824 Lake Street80824 Lake Street',
  },
  {
    title: 'Vgestas',
    date: new Date('2018-02-02'),
    time: '13:55',
    address: '5620 Hillcrest Drive',
  },
];

const UpcomingMeetings = () => {
  const router = useRouter();

  return (
    <>
      <Heading
        title='Următoarele întâlniri'
        icon={BellPlus}
        onClick={() => router.push('/overview/meeting/new')}
      />

      <div className='grid gap-4 md:grid-cols-2 xl:grid-cols-3'>
        {mockData.map((data) => (
          <CardMeeting key={`${data.title}-${data.time}`} data={data} />
        ))}
      </div>
    </>
  );
};

export default UpcomingMeetings;
