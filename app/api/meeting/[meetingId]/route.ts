import { NextResponse } from 'next/server';

import { auth } from '@clerk/nextjs';
import { clerkClient } from '@clerk/nextjs';
import prismadb from '@/lib/prismadb';

export async function PATCH(
  req: Request,
  { params }: { params: { meetingId: string } }
) {
  try {
    const { userId: myId } = auth();
    const body = await req.json();
    const user = myId ? await clerkClient.users.getUser(myId) : null;

    const { title, date, time, users, address, description } = body;

    if (!myId) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    if (!user?.privateMetadata.standardUser) {
      return new NextResponse('Forbidden', { status: 403 });
    }

    if (!title) {
      return new NextResponse('Title is required', {
        status: 400,
      });
    }

    if (!date) {
      return new NextResponse('Date is required', {
        status: 400,
      });
    }
    if (!time) {
      return new NextResponse('Time is required', {
        status: 400,
      });
    }

    if (!users.length) {
      return new NextResponse('At least one user is required', {
        status: 400,
      });
    }

    if (!address) {
      return new NextResponse('Address is required', {
        status: 400,
      });
    }

    if (!description) {
      return new NextResponse('Users is required', {
        status: 400,
      });
    }

    if (!params.meetingId) {
      return new NextResponse('VacationId is required', { status: 400 });
    }

    const serializedUsers = users.join(',');

    const store = await prismadb.meeting.update({
      where: {
        id: params.meetingId,
      },
      data: {
        title,
        date,
        time,
        users: serializedUsers,
        address,
        description,
      },
    });

    return NextResponse.json(store);
  } catch (error) {
    console.log('[MEETING_PATCH]', error);
    return new NextResponse('Internal error', { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { meetingId: string } }
) {
  try {
    const { userId: myId } = auth();
    const user = myId ? await clerkClient.users.getUser(myId) : null;

    if (!myId) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    if (!user?.privateMetadata.standardUser) {
      return new NextResponse('Forbidden', { status: 403 });
    }

    if (!params.meetingId) {
      return new NextResponse('MeetingId is required', { status: 400 });
    }

    const store = await prismadb.meeting.delete({
      where: {
        id: params.meetingId,
      },
    });

    return NextResponse.json(store);
  } catch (error) {
    console.log('[MEETING_DELETE]', error);
    return new NextResponse('Internal error', { status: 500 });
  }
}
