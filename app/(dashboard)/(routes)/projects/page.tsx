import { DataTable } from './components/data-table';
import { columns } from './components/columns';
import { mockData } from './components/mockData';

const ProjectsPage = () => {
  return (
    <div className='space-y-4 p-8 pt-6'>
      <DataTable columns={columns} data={mockData} />
    </div>
  );
};

export default ProjectsPage;
