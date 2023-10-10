import { ChangeEvent, useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import qs from 'query-string';

import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

import useDebounce from '@/hooks/useDebounce';

const SearchFilter = () => {
  const [searchFilter, setSearchFilter] = useState<string>('');
  const searchParams = useSearchParams();
  const router = useRouter();

  useDebounce(() => changeUrl(searchFilter), 500, [searchFilter]);

  useEffect(() => {
    const currentUrl = qs.parse(searchParams.toString());
    const query = currentUrl['search'] ?? '';

    setSearchFilter(query as string);
  }, [searchParams]);

  const changeUrl = (e: string) => {
    const query = { search: e ? e : null };

    const url = qs.stringifyUrl(
      {
        url: window.location.href,
        query,
      },
      { skipNull: true }
    );

    router.push(url);
  };

  const filterByTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchFilter(e.target.value);
  };

  return (
    <div className='w-full sm:w-auto'>
      <Label className='block mb-1.5'>Filtrează după titlu</Label>
      <div className='w-full sm:min-w-[20.5rem]'>
        <Input value={searchFilter} onChange={filterByTitle} type='text' />
      </div>
    </div>
  );
};

export default SearchFilter;
