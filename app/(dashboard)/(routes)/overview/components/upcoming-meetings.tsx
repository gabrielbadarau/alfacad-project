'use client';

import { format } from 'date-fns';
import { ro } from 'date-fns/locale';
import {
  Calendar,
  MapPin,
  Clock,
  BellPlus,
  ChevronRight,
  Pencil,
  Copy,
  Trash2,
  MoreHorizontal,
} from 'lucide-react';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Heading } from '@/components/heading';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

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
  return (
    <>
      <Heading title='Următoarele întâlniri' icon={BellPlus} />
      <div className='grid gap-4 md:grid-cols-2 xl:grid-cols-3'>
        {mockData.map((data) => {
          const formatDate = format(data.date, 'd MMMM', { locale: ro });

          return (
            <Card className='min-w-[21rem]' key={`${data.title}-${data.time}`}>
              <CardHeader className='flex flex-row items-center justify-between py-4'>
                <CardTitle className='truncate py-0.5'>{data.title}</CardTitle>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant='ghost'
                      className='ml-2 flex h-8 w-12 p-0 data-[state=open]:bg-muted shrink-0 !mt-0'
                    >
                      <ChevronRight className='shrink-0 h-5 w-5' />
                      <span className='sr-only'>Open menu</span>
                    </Button>
                  </DropdownMenuTrigger>

                  <DropdownMenuContent className='w-[160px]'>
                    <DropdownMenuItem>
                      Detalii
                      <DropdownMenuShortcut>
                        <MoreHorizontal className='h-4 w-4 shrink-0' />
                      </DropdownMenuShortcut>
                    </DropdownMenuItem>

                    <DropdownMenuItem>
                      Editează
                      <DropdownMenuShortcut>
                        <Pencil className='h-4 w-4 shrink-0' />
                      </DropdownMenuShortcut>
                    </DropdownMenuItem>

                    <DropdownMenuSeparator />

                    <DropdownMenuItem className='text-red-600 hover:text-red-600'>
                      Șterge
                      <DropdownMenuShortcut>
                        <Trash2 className='h-4 w-4 shrink-0' />
                      </DropdownMenuShortcut>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
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
                  <p className='tracking-tighter truncate'>{data.address}</p>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </>
  );
};

export default UpcomingMeetings;
