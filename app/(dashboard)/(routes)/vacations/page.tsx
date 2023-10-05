import { getVacations } from '@/actions/get-vacations';
import { getStandardUsers } from '@/actions/get-standard-users';

import AllAbsences from './components/all-absences';

export const revalidate = 0;

interface VacationsPageProps {
  searchParams: {
    users: string[];
  };
}

const VacationsPage: React.FC<VacationsPageProps> = async ({
  searchParams,
}) => {
  const vacations = await getVacations(false, searchParams.users);
  const standardUsers = await getStandardUsers();

  return (
    <div className='space-y-4 p-8 pt-6'>
      <AllAbsences vacations={vacations} users={standardUsers} />
    </div>
  );
};

export default VacationsPage;
