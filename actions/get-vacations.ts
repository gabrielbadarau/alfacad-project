import prismadb from '@/lib/prismadb';
import { currentUser } from '@clerk/nextjs';

export const getVacations = async (onlyUpcoming: boolean) => {
  try {
    const user = await currentUser();
    let userVacations = [];

    if (!user) {
      throw new Error('Unauthorized');
    }

    if (onlyUpcoming) {
      userVacations = await prismadb.vacation.findMany({
        where: {
          userId: user.id,
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
      userVacations = await prismadb.vacation.findMany({
        where: { userId: user.id },
        orderBy: {
          endDate: 'desc',
        },
      });
    }

    return userVacations.map((userVacation) => ({
      id: userVacation.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.emailAddresses[0].emailAddress,
      startDate: new Date(userVacation.startDate),
      endDate: new Date(userVacation.endDate),
      imageUrl: user.imageUrl,
    }));
  } catch (error) {
    console.log('[VACATIONS_GET]', error);
    return [];
  }
};
