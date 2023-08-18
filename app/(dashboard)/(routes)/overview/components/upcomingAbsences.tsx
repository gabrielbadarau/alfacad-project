import { format, differenceInDays } from 'date-fns';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const mockData = [
  {
    firstName: 'Bernete',
    lastName: 'Rupel',
    email: 'brupel0@prweb.com',
    startDate: new Date('2023-08-16'),
    endDate: new Date('2023-08-16'),
    imageUrl: '',
  },
  {
    firstName: 'Pattie',
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
    <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
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
            className='flex flex-wrap justify-between gap-4 border-2 rounded-lg p-4 border-slate-100'
          >
            <div className='flex flex-row flex-nowrap'>
              <Avatar className='h-9 w-9'>
                <AvatarImage src={data.imageUrl} alt='Avatar' />
                <AvatarFallback className='bg-slate-800 text-white'>
                  {data.firstName.charAt(0)}
                  {data.lastName.charAt(0)}
                </AvatarFallback>
              </Avatar>

              <div className='ml-4 space-y-1'>
                <p className='text-sm font-medium leading-none'>
                  {data.firstName} {data.lastName}
                </p>
                <p className='text-sm text-muted-foreground'>{data.email}</p>
              </div>
            </div>

            <div className='flex flex-col flex-nowrap gap-1'>
              <p className='text-sm font-medium leading-none'>{datesFormat}</p>
              <p className='text-sm text-muted-foreground'>
                {days} {unit}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default UpcomingAbsences;
