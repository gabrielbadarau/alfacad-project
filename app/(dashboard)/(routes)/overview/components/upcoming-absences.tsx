import { CalendarPlus } from 'lucide-react';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from '@/components/ui/card';
import { Heading } from '@/components/heading';

import CardAbsence from './card-absence';

const mockData = [
  {
    firstName: 'Bernete',
    lastName: 'Rupel',
    email: 'brupel0brupel0brupel0@prweb.com',
    startDate: new Date('2023-08-16'),
    endDate: new Date('2023-08-16'),
    imageUrl: '',
  },
  {
    firstName: 'Pattie Pattie Pattie Pattie',
    lastName: 'Mycock',
    email: 'pmycock1@wikipedia.org',
    startDate: new Date('2023-04-16'),
    endDate: new Date('2023-04-30'),
    imageUrl: '',
  },
  {
    firstName: 'Brannon',
    lastName: 'Dockree',
    email: 'bdockree2@forbes.com',
    startDate: new Date('2023-02-27'),
    endDate: new Date('2023-03-05'),
    imageUrl: '',
  },
  {
    firstName: 'Cherlyn',
    lastName: 'Catterell',
    email: 'ccatterell3@toplist.cz',
    startDate: new Date('2023-01-16'),
    endDate: new Date('2023-02-01'),
    imageUrl: '',
  },
];

const UpcomingAbsences = () => {
  if (mockData.length === 0) {
    return (
      <p className='py-6 text-center text-sm text-muted-foreground tracking-wide'>
        Niciun concediu planificat
      </p>
    );
  }

  return (
    <div className='grid'>
      <Card>
        <CardHeader>
          <Heading title='Concedii' icon={CalendarPlus} />
          <CardDescription>Următoarele perioade de concediu</CardDescription>
        </CardHeader>
        <CardContent>
          <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {mockData.map((data) => (
              <CardAbsence
                key={`${data.lastName}-${data.startDate}`}
                data={data}
              />
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default UpcomingAbsences;
