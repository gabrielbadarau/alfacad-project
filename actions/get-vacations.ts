import prismadb from '@/lib/prismadb';
import { currentUser } from '@clerk/nextjs';

export const getVacations = async () => {
  try {
    const user = await currentUser();

    if (!user) {
      throw new Error('Unauthorized');
    }

    const userVacations = await prismadb.vacation.findMany({
      where: { userId: user.id },
    });

    return userVacations.map((userVacation) => ({
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
