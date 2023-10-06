import { Check, UserPlus } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
  CommandSeparator,
} from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';
import { User } from '@/types/user';

interface MultiUserSelectProps {
  values: string[];
  onChange: (...event: any[]) => void;
  options: User[];
  disabled?: boolean;
  id?: string;
}

const MultiUserSelect: React.FC<MultiUserSelectProps> = ({
  values,
  onChange,
  options,
  disabled,
  id,
}) => (
  <Popover>
    <PopoverTrigger name='users' asChild>
      <Button
        id={id}
        variant='outline'
        disabled={disabled}
        className='border-dashed border-2 flex justify-start items-center w-full'
      >
        <UserPlus className='mr-2 h-5 w-5' />

        {values.length > 0 && (
          <>
            <Separator
              orientation='vertical'
              className='mx-2 h-5 bg-slate-300'
            />

            {options
              .filter((option) => values.includes(option.id))
              .map((option) => (
                <Avatar key={option.id} className='h-7 w-7 ml-2'>
                  <AvatarImage src={option.imageUrl} alt='Avatar' />
                  <AvatarFallback className='bg-slate-800 text-white'>
                    {option.firstName?.charAt(0)}
                    {option.lastName?.charAt(0)}
                  </AvatarFallback>
                </Avatar>
              ))}
          </>
        )}
      </Button>
    </PopoverTrigger>

    <PopoverContent className='p-0' align='start'>
      <Command>
        <CommandList>
          <CommandEmpty>Niciun rezultat.</CommandEmpty>
          <CommandGroup>
            {options.map((option) => {
              const isSelected = values.includes(option.id);

              const selectChange = (newValue: string) => {
                let updatedArray = [];

                if (isSelected) {
                  updatedArray = values.filter((id) => id !== newValue);
                } else {
                  updatedArray = [...values, newValue];
                }

                onChange(updatedArray);
              };

              return (
                <CommandItem
                  key={option.id}
                  onSelect={() => selectChange(option.id)}
                >
                  <div
                    className={cn(
                      'mr-2 flex h-4 w-4 items-center justify-center rounded-sm',
                      isSelected
                        ? 'text-slate-800'
                        : 'opacity-50 [&_svg]:invisible'
                    )}
                  >
                    <Check className={cn('h-4 w-4')} />
                  </div>
                  <span className='ml-1'>
                    {option.firstName} {option.lastName}
                  </span>
                </CommandItem>
              );
            })}
          </CommandGroup>

          {values.length > 0 && (
            <>
              <CommandSeparator />

              <CommandGroup>
                <CommandItem
                  onSelect={() => onChange([])}
                  className='justify-center text-center'
                >
                  Șterge selecțiile
                </CommandItem>
              </CommandGroup>
            </>
          )}
        </CommandList>
      </Command>
    </PopoverContent>
  </Popover>
);

export default MultiUserSelect;
