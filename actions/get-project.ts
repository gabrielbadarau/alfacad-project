import prismadb from '@/lib/prismadb';

import { format } from 'date-fns';

export const getProject = async (projectId: string) => {
  try {
    const project = await prismadb.project.findUnique({
      where: {
        id: projectId,
      },
      include: {
        comments: {
          orderBy: {
            createdAt: 'asc',
          },
        },
      },
    });

    return project
      ? {
          info: {
            id: project.id,
            name: project.name,
            type: project.type,
            status: project.status,
            updatedAt: format(project.updatedAt, 'dd/MM/yy HH:mm'),
            version: project.version,
          },
          comments: project.comments,
        }
      : null;
  } catch (error) {
    console.log('[MEETING_GET_ONE]', error);
    return null;
  }
};
