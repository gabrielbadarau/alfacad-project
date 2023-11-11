import { format } from 'date-fns';

import prismadb from '@/lib/prismadb';
import { ProjectInfo } from '@/types/project';
import { currentUser } from '@clerk/nextjs';

export const getProjects = async (): Promise<{
  projects: ProjectInfo[];
}> => {
  try {
    const user = await currentUser();

    if (!user) {
      throw new Error('Unauthorized');
    }

    const projects = await prismadb.project.findMany({
      orderBy: {
        updatedAt: 'desc',
      },
    });

    const projectsInfo = projects.map((project) => ({
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
