import { format } from 'date-fns';

import prismadb from '@/lib/prismadb';
import { ProjectInfo } from '@/types/project';
import { currentUser } from '@clerk/nextjs';

export const getProjects = async (filteredSearch?: {
  filterName: string;
  filterStatus: string[];
}): Promise<{
  projects: ProjectInfo[];
}> => {
  try {
    const user = await currentUser();
    const whereSearch = { AND: [] };

    if (!user) {
      throw new Error('Unauthorized');
    }

    if (filteredSearch) {
      if (filteredSearch.filterName) {
        const searchObject = {
          name: {
            contains: filteredSearch.filterName,
          },
        };

        whereSearch.AND.push(searchObject as never);
      }

      if (filteredSearch.filterStatus) {
        const statuses = Array.isArray(filteredSearch.filterStatus)
          ? filteredSearch.filterStatus
          : [filteredSearch.filterStatus];

        const searchObject = {
          status: {
            in: statuses,
          },
        };

        whereSearch.AND.push(searchObject as never);
      }
    }

    const projects = await prismadb.project.findMany({
      where: whereSearch,
      orderBy: {
        updatedAt: 'desc',
      },
    });

    const projectsInfo = projects.map((project) => ({
      id: project.id,
      name: project.name,
      type: project.type,
      status: project.status,
      updatedAt: format(project.updatedAt, 'dd/MM/yy HH:mm'),
    }));

    return { projects: projectsInfo };
  } catch (error) {
    console.log('[PROJECT_GET]', error);
    return { projects: [] };
  }
};
