import { format } from 'date-fns';

import prismadb from '@/lib/prismadb';
import { ProjectInfo } from '@/types/project';
import { currentUser } from '@clerk/nextjs';

export const getProjects = async (
  filteredSearch?: {
    filterName: string;
    filterStatus: string[];
  },
  pageOptions?: {
    page: number;
    pageSize: number;
  }
): Promise<{
  projects: ProjectInfo[];
  totalDocuments: number;
}> => {
  try {
    let skip = 0;
    let take = 10;
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

    if (pageOptions?.pageSize) {
      take = Number(pageOptions.pageSize);
    }

    if (pageOptions?.page) {
      skip = Number(take * (pageOptions.page - 1));
    }

    const projects = await prismadb.project.findMany({
      take,
      skip,
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

    const countDocuments = await prismadb.project.count({
      where: whereSearch,
      orderBy: {
        updatedAt: 'desc',
      },
    });

    return { projects: projectsInfo, totalDocuments: countDocuments };
  } catch (error) {
    console.log('[PROJECT_GET]', error);
    return { projects: [], totalDocuments: 0 };
  }
};
