import { NextResponse } from 'next/server';

import { auth } from '@clerk/nextjs';
import { clerkClient } from '@clerk/nextjs';
import prismadb from '@/lib/prismadb';

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const user = userId ? await clerkClient.users.getUser(userId) : null;

    const { title, date, time, users, address, description } = body;

    if (!userId) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    if (!user?.publicMetadata.premiumUser) {
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

    const serializedUsers = users.join(',');

    const meeting = await prismadb.meeting.create({
      data: {
        title,
        date,
        time,
        users: serializedUsers,
        address,
        description,
      },
    });

    return NextResponse.json(meeting);
  } catch (error) {
    console.log('[MEETING_POST]', error);
    return new NextResponse('Internal error', { status: 500 });
  }
}
