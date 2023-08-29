import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { FormControl } from '@/components/ui/form';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { cn } from '@/lib/utils';

interface DatePickerProps {
  value: Date;
  onChange: () => void;
}

const DatePicker: React.FC<DatePickerProps> = ({ value, onChange }) => {
  const currentDate = new Date();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <FormControl>
          <Button
            variant={'outline'}
            className={cn(
              'w-[348px] pl-3 text-left font-normal',
              !value && 'text-muted-foreground'
            )}
          >
            {value ? format(value, 'LLL dd, y') : null}
            <CalendarIcon className='ml-auto h-4 w-4 opacity-50' />
          </Button>
        </FormControl>
      </PopoverTrigger>
      <PopoverContent className='w-auto p-0' align='start'>
        <Calendar
          initialFocus
          mode='single'
          selected={value}
          onSelect={onChange}
          fromDate={currentDate}
        />
      </PopoverContent>
    </Popover>
  );
};

export default DatePicker;
