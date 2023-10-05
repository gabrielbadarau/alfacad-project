import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import qs from 'query-string';

import MultiUserSelect from '@/components/multi-user-select';
import { Label } from '@/components/ui/label';
import { User } from '@/types/user';

interface FilterProps {
  users: User[];
}

const Filter: React.FC<FilterProps> = ({ users }) => {
  const [selectedUsers, setSelectedUsers] = useState<string[]>([]);
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const currentUrl = qs.parse(searchParams.toString());
    const query = currentUrl['users'] ?? [];

    if (Array.isArray(query)) {
      setSelectedUsers(query as string[]);
    } else {
      setSelectedUsers([query]);
    }
  }, [searchParams]);

  const changeUrl = (e: string[]) => {
    const query = { users: e };

    const url = qs.stringifyUrl(
      {
        url: window.location.href,
        query,
      },
      { skipNull: true }
    );

    router.push(url);
  };

  const filterByUser = (e: string[]) => {
    setSelectedUsers(e);
    changeUrl(e);
  };

  return (
    <div className='w-full sm:w-auto'>
      <Label className='block mb-1.5'>Filtrează după utilizator</Label>
      <div className='w-full sm:min-w-[20.5rem]'>
        <MultiUserSelect
          onChange={filterByUser}
          values={selectedUsers}
          options={users}
        />
      </div>
    </div>
  );
};

export default Filter;
