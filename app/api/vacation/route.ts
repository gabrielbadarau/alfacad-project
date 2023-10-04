import { NextResponse } from 'next/server';

import { auth } from '@clerk/nextjs';
import { clerkClient } from '@clerk/nextjs';
import prismadb from '@/lib/prismadb';

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const user = userId ? await clerkClient.users.getUser(userId) : null;

    const { startDate, endDate } = body;

    if (!userId) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    if (!user?.privateMetadata.standardUser) {
      return new NextResponse('Forbidden', { status: 403 });
    }

    if (!startDate && !endDate) {
      return new NextResponse('Start Date and End Date are required', {
        status: 400,
      });
    }

    const vacation = await prismadb.vacation.create({
      data: {
        userId,
        startDate,
        endDate,
      },
    });

    return NextResponse.json(vacation);
  } catch (error) {
    console.log('[VACATIONS_POST]', error);
    return new NextResponse('Internal error', { status: 500 });
  }
}
