import { Calendar as CalendarIcon } from 'lucide-react';
import { ControllerRenderProps } from 'react-hook-form';
import { format } from 'date-fns';

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { FormControl } from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { cn } from '@/lib/utils';

interface RangeDatePickerProps {
  field: ControllerRenderProps<
    {
      range: {
        from: Date;
        to?: Date | undefined;
      };
    },
    'range'
  >;
}

const RangeDatePicker: React.FC<RangeDatePickerProps> = ({ field }) => {
  const currentDate = new Date();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <FormControl>
          <Button
            variant={'outline'}
            className={cn(
              'w-full pl-3 text-left font-normal',
              !field.value && 'text-muted-foreground'
            )}
          >
            {field.value?.from ? (
              field.value?.to ? (
                <>
                  {format(field.value.from, 'LLL dd, y')} -{' '}
                  {format(field.value.to, 'LLL dd, y')}
                </>
              ) : (
                format(field.value.from, 'LLL dd, y')
              )
            ) : null}
            <CalendarIcon className='ml-auto h-4 w-4 opacity-50' />
          </Button>
        </FormControl>
      </PopoverTrigger>
      <PopoverContent className='w-auto p-0' align='start'>
        <Calendar
          initialFocus
          mode='range'
          selected={field.value}
          onSelect={field.onChange}
          fromDate={currentDate}
        />
      </PopoverContent>
    </Popover>
  );
};

export default RangeDatePicker;
