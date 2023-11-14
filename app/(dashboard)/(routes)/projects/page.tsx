import Client from '@/components/client';

import { getProjects } from '@/actions/get-projects';

import DataTable from './components/data-table';
import { columns } from './components/columns';

export const revalidate = 0;

interface ProjectPageProps {
  searchParams: {
    search: string;
    status: string[];
  };
}

const ProjectsPage: React.FC<ProjectPageProps> = async ({ searchParams }) => {
  const { projects } = await getProjects({
    filterName: searchParams.search,
    filterStatus: searchParams.status,
  });

  return (
    <div className='space-y-4 p-8 pt-6'>
      <Client>
        <DataTable columns={columns} data={projects} />
      </Client>
    </div>
  );
};

export default ProjectsPage;
