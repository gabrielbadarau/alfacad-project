'use client';

import qs from 'query-string';
import { useRouter, useSearchParams } from 'next/navigation';
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from 'lucide-react';
import { useEffect, useState } from 'react';

import { Table } from '@tanstack/react-table';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface DataTablePaginationProps<TData> {
  table: Table<TData>;
  totalProjects: number;
}

export function DataTablePagination<TData>({
  totalProjects,
}: DataTablePaginationProps<TData>) {
  const searchParams = useSearchParams();
  const router = useRouter();
  let [pageIndex, setPageIndex] = useState(1);
  let [pageSize, setPageSize] = useState(10);

  const lastPageIndex = Math.ceil(totalProjects / pageSize);

  useEffect(() => {
    const currentUrl = qs.parse(searchParams.toString());

    if (currentUrl.page) {
      setPageIndex(+currentUrl.page);
    } else {
      setPageIndex(1);
    }

    if (currentUrl.pageSize) {
      setPageSize(+currentUrl.pageSize);
    } else {
      setPageSize(10);
    }
  }, [searchParams]);

  const onNextPage = () => {
    const currentUrl = qs.parse(searchParams.toString());

    const query = {
      page: currentUrl.page ? +currentUrl.page + 1 : 2,
    };

    const url = qs.stringifyUrl(
      {
        url: window.location.href,
        query,
      },
      { skipNull: true }
    );

    router.push(url);
  };

  const onPreviousPage = () => {
    const currentUrl = qs.parse(searchParams.toString());

    const query = {
      page:
        currentUrl.page && +currentUrl.page !== 2 ? +currentUrl.page - 1 : null,
    };

    const url = qs.stringifyUrl(
      {
        url: window.location.href,
        query,
      },
      { skipNull: true }
    );

    router.push(url);
  };

  const onFirstPage = () => {
    const query = {
      page: null,
    };

    const url = qs.stringifyUrl(
      {
        url: window.location.href,
        query,
      },
      { skipNull: true }
    );

    router.push(url);
  };

  const onLastPage = () => {
    const query = {
      page: lastPageIndex,
    };

    const url = qs.stringifyUrl(
      {
        url: window.location.href,
        query,
      },
      { skipNull: true }
    );

    router.push(url);
  };

  const changePageSize = (value: number) => {
    const query = {
      pageSize: value === 10 ? null : value,
    };

    const url = qs.stringifyUrl(
      {
        url: window.location.href,
        query,
      },
      { skipNull: true }
    );

    router.push(url);
  };

  return (
    <div className='flex items-center justify-end'>
      <div className='flex items-center space-x-6 lg:space-x-8'>
        <div className='flex items-center space-x-2'>
          <p className='text-sm font-medium'>Rânduri per pagină</p>
          <Select
            value={`${pageSize}`}
            onValueChange={(value) => {
              changePageSize(Number(value));
            }}
          >
            <SelectTrigger className='h-8 w-[70px]'>
              <SelectValue placeholder={pageSize} />
            </SelectTrigger>
            <SelectContent side='top'>
              {[10, 20, 50].map((pageSize) => (
                <SelectItem key={pageSize} value={`${pageSize}`}>
                  {pageSize}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className='flex w-[100px] items-center justify-center text-sm font-medium'>
          Pagina {pageIndex} din {lastPageIndex}
        </div>
        <div className='flex items-center space-x-2'>
          <Button
            variant='outline'
            className='hidden h-8 w-8 p-0 lg:flex'
            onClick={onFirstPage}
            disabled={pageIndex === 1}
          >
            <span className='sr-only'>Prima pagină</span>
            <ChevronsLeft className='h-4 w-4' />
          </Button>
          <Button
            variant='outline'
            className='h-8 w-8 p-0'
            onClick={onPreviousPage}
            disabled={pageIndex === 1}
          >
            <span className='sr-only'>Pagina anterioară</span>
            <ChevronLeft className='h-4 w-4' />
          </Button>
          <Button
            variant='outline'
            className='h-8 w-8 p-0'
            onClick={onNextPage}
            disabled={pageIndex >= lastPageIndex}
          >
            <span className='sr-only'>Pagina următoare</span>
            <ChevronRight className='h-4 w-4' />
          </Button>
          <Button
            variant='outline'
            className='hidden h-8 w-8 p-0 lg:flex'
            onClick={onLastPage}
            disabled={pageIndex >= lastPageIndex}
          >
            <span className='sr-only'>Ultima pagină</span>
            <ChevronsRight className='h-4 w-4' />
          </Button>
        </div>
      </div>
    </div>
  );
}
