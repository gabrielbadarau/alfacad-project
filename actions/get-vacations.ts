import prismadb from '@/lib/prismadb';
import { currentUser } from '@clerk/nextjs';
import { clerkClient } from '@clerk/nextjs';

export const getVacations = async (
  onlyUpcoming: boolean = true,
  filteredUsers?: string[]
) => {
  try {
    let usersVacations = [];
    const user = await currentUser();
    const whereSearch = { userId: {} };

    if (!user) {
      throw new Error('Unauthorized');
    }

    if (filteredUsers) {
      const users = Array.isArray(filteredUsers)
        ? filteredUsers
        : [filteredUsers];
      whereSearch.userId = { in: users };
    }

    if (onlyUpcoming) {
      usersVacations = await prismadb.vacation.findMany({
        where: {
          endDate: {
            gte: new Date(),
          },
        },
        orderBy: {
          endDate: 'asc',
        },
        take: 8,
      });
    } else {
      usersVacations = await prismadb.vacation.findMany({
        where: whereSearch,
        orderBy: {
          endDate: 'desc',
        },
      });
    }

    return await Promise.all(
      usersVacations.map(async (userVacation) => {
        const userData = await clerkClient.users.getUser(userVacation.userId);

        return {
          id: userVacation.id,
          firstName: userData.firstName,
          lastName: userData.lastName,
          email: userData.emailAddresses[0].emailAddress,
          startDate: new Date(userVacation.startDate),
          endDate: new Date(userVacation.endDate),
          imageUrl: userData.imageUrl,
        };
      })
    );
  } catch (error) {
    console.log('[VACATIONS_GET]', error);
    return [];
  }
};
