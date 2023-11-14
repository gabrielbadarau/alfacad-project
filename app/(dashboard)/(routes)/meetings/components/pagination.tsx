'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import qs from 'query-string';

import { Button } from '@/components/ui/button';

interface PaginationProps {
  totalMeetings: number;
}

const Pagination: React.FC<PaginationProps> = ({ totalMeetings }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  let [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    const currentUrl = qs.parse(searchParams.toString());

    if (currentUrl.page) {
      setPageNumber(+currentUrl.page);
    } else {
      setPageNumber(1);
    }
  }, [searchParams]);

  const nextPage = () => {
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

  const previousPage = () => {
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

  return (
    <div className='flex flex-wrap justify-center sm:space-y-0 space-x-3 items-center'>
      <Button type='button' onClick={previousPage} disabled={pageNumber === 1}>
        <ChevronLeft className='sm:mr-2 mr-0 h-5 w-5' />
        <span className='hidden sm:inline'>Pagina anterioară</span>
      </Button>

      <Button variant='outline'>{pageNumber}</Button>

      <Button
        type='button'
        onClick={nextPage}
        disabled={totalMeetings <= pageNumber * 6}
      >
        <span className='hidden sm:inline'>Pagina următoare</span>
        <ChevronRight className='sm:ml-2 ml-0 h-5 w-5' />
      </Button>
    </div>
  );
};

export default Pagination;
