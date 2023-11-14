'use client';

import { ChangeEvent, useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import qs from 'query-string';

import { Table } from '@tanstack/react-table';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import useDebounce from '@/hooks/useDebounce';

import { projectStatuses } from './utils';
import { DataTableFacetedFilter } from './data-table-faceted-filter';

export function DataTableToolbar() {
  const [isFilterOn, setIsFilterOn] = useState<boolean>(false);
  const [searchFilter, setSearchFilter] = useState<string>('');
  const searchParams = useSearchParams();
  const router = useRouter();

  useDebounce(() => changeUrl(searchFilter), 500, [searchFilter]);

  useEffect(() => {
    const currentUrl = qs.parse(searchParams.toString());

    Object.keys(currentUrl).length ? setIsFilterOn(true) : setIsFilterOn(false);

    const query = currentUrl['search'] ?? '';

    setSearchFilter(query as string);
  }, [searchParams]);

  const changeUrl = (e: string) => {
    const query = { search: e ? e : null, pageSize: null, page: null };

    const url = qs.stringifyUrl(
      {
        url: window.location.href,
        query,
      },
      { skipNull: true }
    );

    router.push(url);
  };

  const filterByName = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchFilter(e.target.value);
  };

  const resetFilters = () => {
    const query = { search: null, status: null, page: null, pageSize: null };

    const urlWithoutParams = qs.stringifyUrl(
      {
        url: window.location.href,
        query,
      },
      { skipNull: true }
    );

    router.push(urlWithoutParams);
  };

  return (
    <div className='flex items-center justify-between'>
      <div className='flex flex-1 items-center space-x-2'>
        <Input
          placeholder='Caută după nume...'
          value={searchFilter}
          onChange={filterByName}
          className='h-8 w-[150px] lg:w-[250px]'
        />

        <DataTableFacetedFilter title='Status' options={projectStatuses} />

        {isFilterOn && (
          <Button
            variant='ghost'
            onClick={resetFilters}
            className='h-8 px-2 lg:px-3'
          >
            Reset
            <X className='ml-2 h-4 w-4 shrink-0' />
          </Button>
        )}
      </div>
    </div>
  );
}
