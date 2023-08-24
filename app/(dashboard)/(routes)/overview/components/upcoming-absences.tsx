import { format, differenceInDays } from 'date-fns';
import { CalendarPlus, Trash2 } from 'lucide-react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from '@/components/ui/card';
import { Heading } from '@/components/heading';
import { Button } from '@/components/ui/button';

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
            {mockData.map((data) => {
              const days = differenceInDays(data.endDate, data.startDate) + 1;
              const unit = days > 1 ? 'zile' : 'zi';
              const datesFormat =
                days > 1
                  ? `${format(data.startDate, 'MMM d')} - ${format(
                      data.endDate,
                      'MMM d'
                    )}`
                  : `${format(data.startDate, 'MMM d')}`;

              return (
                <div
                  key={`${data.lastName}-${data.startDate}`}
                  className='flex flex-col flex-nowrap gap-4 border-2 rounded-lg p-4 border-slate-100 min-w-[18rem]'
                >
                  <div className='flex flex-row flex-nowrap'>
                    <Avatar className='h-9 w-9'>
                      <AvatarImage src={data.imageUrl} alt='Avatar' />
                      <AvatarFallback className='bg-slate-800 text-white'>
                        {data.firstName.charAt(0)}
                        {data.lastName.charAt(0)}
                      </AvatarFallback>
                    </Avatar>

                    <div className='pl-4 space-y-1 min-w-[13.5rem]'>
                      <p className='text-sm font-medium leading-none truncate'>
                        {data.firstName} {data.lastName}
                      </p>
                      <p className='text-sm text-muted-foreground truncate'>
                        {data.email}
                      </p>
                    </div>
                  </div>

                  <div className='flex flex-row flex-nowrap justify-between'>
                    <div className='flex flex-col flex-nowrap gap-1'>
                      <p className='text-sm font-medium leading-none'>
                        {datesFormat}
                      </p>
                      <p className='text-sm text-muted-foreground'>
                        {days} {unit}
                      </p>
                    </div>

                    <Button
                      variant='ghost'
                      className='flex h-8 w-12 shrink-0 text-slate-700'
                    >
                      <Trash2 className='shrink-0 h-5 w-5' />
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default UpcomingAbsences;
