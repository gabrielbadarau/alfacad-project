import { format } from 'date-fns';
import { Calendar as CalendarIcon, X } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { FormControl } from '@/components/ui/form';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { cn } from '@/lib/utils';
import { PopoverClose } from '@radix-ui/react-popover';

interface DatePickerProps {
  value: Date;
  onChange: () => void;
  disabled: boolean;
}

const DatePicker: React.FC<DatePickerProps> = ({
  value,
  onChange,
  disabled,
}) => {
  const currentDate = new Date();

  return (
    <Popover>
      <PopoverTrigger disabled={disabled} asChild>
        <FormControl>
          <Button
            variant={'outline'}
            className={cn(
              'w-full pl-3 text-left font-normal',
              !value && 'text-muted-foreground'
            )}
          >
            {value ? format(value, 'LLL dd, y') : null}
            <CalendarIcon className='ml-auto h-4 w-4 opacity-50' />
          </Button>
        </FormControl>
      </PopoverTrigger>
      <PopoverContent className='w-auto p-0' align='center'>
        <div className='flex m-1'>
          <div className='flex-1'></div>
          <PopoverClose>
            <X size={21} className='text-primary/60 hover:text-destructive' />
          </PopoverClose>
        </div>

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
