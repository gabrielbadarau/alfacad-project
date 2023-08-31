import { Check, UserPlus } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
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
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { User } from '@/types/user';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

interface MultiUserSelectProps {
  values: string[];
  onChange: (...event: any[]) => void;
  options: User[];
}

const MultiUserSelect: React.FC<MultiUserSelectProps> = ({
  values,
  onChange,
  options,
}) => {
  console.log('render');

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant='outline' size='sm' className='h-8 border-dashed'>
          <UserPlus className='mr-2 h-4 w-4' />
          {values.length > 0 && (
            <>
              <Separator orientation='vertical' className='mx-2 h-4' />
              <Badge
                variant='secondary'
                className='rounded-sm px-1 font-normal lg:hidden'
              >
                {values.length}
              </Badge>
              <div className='hidden space-x-1 lg:flex'>
                {values.length > 2 ? (
                  <Badge
                    variant='secondary'
                    className='rounded-sm px-1 font-normal'
                  >
                    {values.length} selected
                  </Badge>
                ) : (
                  options
                    .filter((option) => values.includes(option.id))
                    .map((option) => (
                      <Badge
                        variant='secondary'
                        key={option.id}
                        className='rounded-sm px-1 font-normal'
                      >
                        {option.firstName}
                      </Badge>
                    ))
                )}
              </div>
            </>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-[200px] p-0' align='start'>
        <Command>
          <CommandInput />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
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
                  <CommandItem key={option.id}  onSelect={selectChange}>
                    <div
                      className={cn(
                        'mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary',
                        isSelected
                          ? 'bg-primary text-primary-foreground'
                          : 'opacity-50 [&_svg]:invisible'
                      )}
                    >
                      <Check className={cn('h-4 w-4')} />
                    </div>
                    {option.imageUrl && (
                      // <option.icon className='mr-2 h-4 w-4 text-muted-foreground' />
                      <Avatar className='h-9 w-9'>
                        <AvatarImage src={option.imageUrl} alt='Avatar' />
                        <AvatarFallback className='bg-slate-800 text-white'>
                          {option.firstName?.charAt(0)}
                          {option.lastName?.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                    )}
                    <span>{option.id}</span>
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
                    Clear filters
                  </CommandItem>
                </CommandGroup>
              </>
            )}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default MultiUserSelect;
