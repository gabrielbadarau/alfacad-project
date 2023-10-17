import prismadb from '@/lib/prismadb';

export const getMeeting = async (meetingId: string) => {
  try {
    const meetingData = await prismadb.meeting.findUnique({
      where: {
        id: meetingId,
      },
    });

    // we need to deserialize users

    return meetingData
      ? { ...meetingData, users: meetingData?.users.split(',') }
      : null;
  } catch (error) {
    console.log('[MEETING_GET_ONE]', error);
    return null;
  }
};
