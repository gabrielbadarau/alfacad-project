import { Calendar as CalendarIcon } from 'lucide-react';
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
  value: {
    from: Date;
    to?: Date | undefined;
  };
  onChange: () => void;
  disabled: boolean;
}

const RangeDatePicker: React.FC<RangeDatePickerProps> = ({
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
            {value?.from ? (
              value?.to ? (
                <>
                  {format(value.from, 'LLL dd, y')} -{' '}
                  {format(value.to, 'LLL dd, y')}
                </>
              ) : (
                format(value.from, 'LLL dd, y')
              )
            ) : null}
            <CalendarIcon className='ml-auto h-4 w-4 opacity-50' />
          </Button>
        </FormControl>
      </PopoverTrigger>
      <PopoverContent className='w-auto p-0' align='center'>
        <Calendar
          initialFocus
          mode='range'
          selected={value}
          onSelect={onChange}
          fromDate={currentDate}
        />
      </PopoverContent>
    </Popover>
  );
};

export default RangeDatePicker;
