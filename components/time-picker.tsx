'use client';

import { useRef } from 'react';
import { FormControl } from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const hoursArray = [
  '07',
  '08',
  '09',
  '10',
  '11',
  '12',
  '13',
  '14',
  '15',
  '16',
  '17',
  '18',
  '19',
];

const minutesArray = ['00', '10', '20', '30', '40', '50'];

interface TimePickerProps {
  value: string;
  onChange: (...event: any[]) => void;
  disabled: boolean;
}

const TimePicker: React.FC<TimePickerProps> = ({
  value,
  onChange,
  disabled,
}) => {
  const hour = useRef('');
  const minute = useRef('');

  const handleHourChange = (newValue: string) => {
    hour.current = newValue;

    const time = `${hour.current}:${minute.current}`;

    onChange(time);
  };

  const handleMinuteChange = (newValue: string) => {
    minute.current = newValue;

    const time = `${hour.current}:${minute.current}`;

    onChange(time);
  };

  return (
    <div className='flex flex-row flex-nowrap items-center gap-1.5'>
      <Select
        disabled={disabled}
        onValueChange={handleHourChange}
        defaultValue={value}
      >
        <FormControl className='w-[65px]'>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
        </FormControl>
        <SelectContent>
          {hoursArray.map((hour) => (
            <SelectItem key={hour} value={hour}>
              {hour}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <span className='text-lg font-bold'>:</span>

      <Select
        disabled={disabled}
        onValueChange={handleMinuteChange}
        defaultValue={value}
      >
        <FormControl className='w-[65px]'>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
        </FormControl>
        <SelectContent>
          {minutesArray.map((minute) => (
            <SelectItem key={minute} value={minute}>
              {minute}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default TimePicker;
