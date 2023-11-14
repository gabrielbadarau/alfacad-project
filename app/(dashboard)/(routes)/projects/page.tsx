import Client from '@/components/client';

import { getProjects } from '@/actions/get-projects';

import DataTable from './components/data-table';
import { columns } from './components/columns';

export const revalidate = 0;

interface ProjectPageProps {
  searchParams: {
    search: string;
    status: string[];
    page: number;
    pageSize: number;
  };
}

const ProjectsPage: React.FC<ProjectPageProps> = async ({ searchParams }) => {
  const { projects, totalDocuments } = await getProjects(
    {
      filterName: searchParams.search,
      filterStatus: searchParams.status,
    },
    {
      page: searchParams.page,
      pageSize: searchParams.pageSize,
    }
  );

  return (
    <div className='space-y-4 p-8 pt-6'>
      <Client>
        <DataTable
          columns={columns}
          data={projects}
          totalProjects={totalDocuments}
        />
      </Client>
    </div>
  );
};

export default ProjectsPage;
