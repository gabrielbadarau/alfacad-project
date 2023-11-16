import prismadb from '@/lib/prismadb';
import { Meeting } from '@/types/meeting';
import { currentUser } from '@clerk/nextjs';
import { clerkClient } from '@clerk/nextjs';

export const getMeetings = async (
  onlyUpcoming: boolean = true,
  filteredSearch?: string,
  page?: number
): Promise<{ meetings: Meeting[]; totalDocuments: number }> => {
  try {
    const whereSearch = { title: {} };
    const take = 6;

    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);
    // I have to decrease time because of the conflict timezones between server and client, and because I don't send any data from client to server in order for him to know in what time zone the request was made so that it could give me actual start of the day
    // timezone GMT +2 + added a few hours extra in case, so this is temporary fix
    const decreasedDate = new Date(currentDate.getTime() - 5 * 60 * 60 * 1000);

    const user = await currentUser();

    let dashboardMeetings = [];
    let skip = 0;
    let countDocuments = 0;

    if (!user) {
      throw new Error('Unauthorized');
    }

    if (filteredSearch) {
      whereSearch.title = { contains: filteredSearch };
    }

    if (page) {
      skip = take * (page - 1);
    }

    if (onlyUpcoming) {
      dashboardMeetings = await prismadb.meeting.findMany({
        where: {
          date: {
            gte: decreasedDate,
          },
        },
        orderBy: {
          date: 'asc',
        },
        take: 3,
      });
    } else {
      dashboardMeetings = await prismadb.meeting.findMany({
        skip,
        take,
        where: whereSearch,
        orderBy: {
          date: 'desc',
        },
      });

      countDocuments = await prismadb.meeting.count({
        where: whereSearch,
        orderBy: {
          date: 'desc',
        },
      });
    }

    const meetings = await Promise.all(
      dashboardMeetings.map(async (meeting) => {
        const deserializedUsersId = meeting.users.split(',');

        const usersPromises = deserializedUsersId.map(async (userId) => {
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

    if (onlyUpcoming) {
      return { meetings, totalDocuments: 8 };
    } else {
      return { meetings, totalDocuments: countDocuments };
    }
  } catch (error) {
    console.log('[MEETING_GET]', error);
    return { meetings: [], totalDocuments: 0 };
  }
};
