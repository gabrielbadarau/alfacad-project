import prismadb from '@/lib/prismadb';
import { Vacation } from '@/types/vacation';
import { currentUser } from '@clerk/nextjs';
import { clerkClient } from '@clerk/nextjs';

export const getVacations = async (
  onlyUpcoming: boolean = true,
  filteredUsers?: string[],
  page?: number
): Promise<{ vacations: Vacation[]; totalDocuments: number }> => {
  try {
    const whereSearch = { userId: {} };
    const take = 12;

    const user = await currentUser();

    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);

    let usersVacations = [];
    let skip = 0;
    let countDocuments = 0;

    if (!user) {
      throw new Error('Unauthorized');
    }

    if (filteredUsers) {
      const users = Array.isArray(filteredUsers)
        ? filteredUsers
        : [filteredUsers];
      whereSearch.userId = { in: users };
    }

    if (page) {
      skip = take * (page - 1);
    }

    if (onlyUpcoming) {
      usersVacations = await prismadb.vacation.findMany({
        where: {
          endDate: {
            gte: currentDate,
          },
        },
        orderBy: {
          endDate: 'asc',
        },
        take: 8,
      });
    } else {
      usersVacations = await prismadb.vacation.findMany({
        skip,
        take,
        where: whereSearch,
        orderBy: {
          endDate: 'desc',
        },
      });

      countDocuments = await prismadb.vacation.count({
        where: whereSearch,
        orderBy: {
          endDate: 'desc',
        },
      });
    }

    const vacations = await Promise.all(
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

    if (onlyUpcoming) {
      return { vacations, totalDocuments: 8 };
    } else {
      return { vacations, totalDocuments: countDocuments };
    }
  } catch (error) {
    console.log('[VACATION_GET]', error);
    return { vacations: [], totalDocuments: 0 };
  }
};
