import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Check, PlusCircle } from 'lucide-react';
import qs from 'query-string';

import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Separator } from '@/components/ui/separator';

interface DataTableFacetedFilter<TData, TValue> {
  title?: string;
  options: {
    label: string;
    value: string;
    icon?: React.ComponentType<{ className?: string }>;
  }[];
}

export function DataTableFacetedFilter<TData, TValue>({
  title,
  options,
}: DataTableFacetedFilter<TData, TValue>) {
  const [selectedValues, setSelectedValues] = useState<string[]>([]);
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const currentUrl = qs.parse(searchParams.toString());
    const query = currentUrl['status'] ?? [];

    if (Array.isArray(query)) {
      setSelectedValues(query as string[]);
    } else {
      setSelectedValues([query]);
    }
  }, [searchParams]);

  const changeUrl = (values: string[]) => {
    const query = { status: values, pageSize: null, page: null };

    const url = qs.stringifyUrl(
      {
        url: window.location.href,
        query,
      },
      { skipNull: true }
    );

    router.push(url);
  };

  const deleteStatus = (value: string) => {
    const newArray = selectedValues.filter(
      (selectedValue) => selectedValue !== value
    );
    changeUrl(newArray);
  };

  const addStatus = (value: string) => {
    const newArray = [...selectedValues, value];
    changeUrl(newArray);
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant='outline' size='sm' className='h-8 border-dashed'>
          <PlusCircle className='mr-2 h-4 w-4 shrink-0' />
          {title}
          {selectedValues?.length > 0 && (
            <>
              <Separator orientation='vertical' className='mx-2 h-4' />
              <Badge
                variant='secondary'
                className='rounded-sm px-1 font-normal lg:hidden'
              >
                {selectedValues.length}
              </Badge>
              <div className='hidden space-x-1 lg:flex'>
                {selectedValues.length > 2 ? (
                  <Badge
                    variant='secondary'
                    className='rounded-sm px-1 font-normal'
                  >
                    {selectedValues.length} selected
                  </Badge>
                ) : (
                  options
                    .filter((option) => selectedValues.includes(option.value))
                    .map((option) => (
                      <Badge
                        variant='secondary'
                        key={option.value}
                        className='rounded-sm px-1 font-normal'
                      >
                        {option.label}
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
          <CommandList>
            <CommandGroup>
              {options.map((option) => {
                const isSelected = selectedValues.includes(option.value);
                return (
                  <CommandItem
                    className='justify-between'
                    key={option.value}
                    onSelect={() => {
                      if (isSelected) {
                        deleteStatus(option.value);
                      } else {
                        addStatus(option.value);
                      }
                    }}
                  >
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
                    <span className='ml-2 w-full'>{option.label}</span>
                    {option.icon && (
                      <option.icon className='ml-2 h-5 w-6 text-muted-foreground shrink-0' />
                    )}
                  </CommandItem>
                );
              })}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
