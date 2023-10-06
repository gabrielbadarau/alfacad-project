import prismadb from '@/lib/prismadb';
import { currentUser } from '@clerk/nextjs';
import { clerkClient } from '@clerk/nextjs';

export const getMeetings = async (
  onlyUpcoming: boolean = true,
  filteredSearch?: string
) => {
  try {
    let meetings = [];
    const user = await currentUser();
    const whereSearch = { title: {} };
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);

    if (!user) {
      throw new Error('Unauthorized');
    }

    if (filteredSearch) {
      whereSearch.title = { contains: filteredSearch };
    }

    if (onlyUpcoming) {
      meetings = await prismadb.meeting.findMany({
        where: {
          date: {
            gte: currentDate,
          },
        },
        orderBy: {
          date: 'asc',
        },
        take: 4,
      });
    } else {
      meetings = await prismadb.meeting.findMany({
        where: whereSearch,
        orderBy: {
          date: 'desc',
        },
      });
    }

    return await Promise.all(
      meetings.map(async (meeting) => {
        const usersId = meeting.users.split(',');

        const usersPromises = usersId.map(async (userId) => {
          const userData = await clerkClient.users.getUser(userId);

          return {
            emailAddress: userData.emailAddresses[0].emailAddress,
            firstName: userData.firstName,
            lastName: userData.lastName,
            id: userId,
            imageUrl: userData.imageUrl,
          };
        });

        const users = await Promise.all(usersPromises);

        return {
          id: meeting.id,
          title: meeting.title,
          date: meeting.date,
          time: meeting.time,
          users,
          address: meeting.address,
          description: meeting.description,
        };
      })
    );
  } catch (error) {
    console.log('[MEETING_GET]', error);
    return [];
  }
};
