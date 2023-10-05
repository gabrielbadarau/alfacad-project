import { getVacations } from '@/actions/get-vacations';
import { getStandardUsers } from '@/actions/get-standard-users';

import AllAbsences from './components/all-absences';

const VacationsPage = async () => {
  const vacations = await getVacations(false);
  const standardUsers = await getStandardUsers();

  return (
    <div className='space-y-4 p-8 pt-6'>
      <AllAbsences vacations={vacations} users={standardUsers} />
    </div>
  );
};

export default VacationsPage;
