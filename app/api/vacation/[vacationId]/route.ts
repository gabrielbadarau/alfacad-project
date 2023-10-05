import { NextResponse } from 'next/server';

import { auth } from '@clerk/nextjs';
import { clerkClient } from '@clerk/nextjs';
import prismadb from '@/lib/prismadb';

export async function PATCH(
  req: Request,
  { params }: { params: { vacationId: string } }
) {
  try {
    const { userId: myId } = auth();
    const body = await req.json();
    const user = myId ? await clerkClient.users.getUser(myId) : null;

    const { userId, startDate, endDate } = body;

    if (!myId) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    if (!user?.privateMetadata.standardUser) {
      return new NextResponse('Forbidden', { status: 403 });
    }

    if (!userId) {
      return new NextResponse('UserId is required', { status: 400 });
    }

    if (!startDate && !endDate) {
      return new NextResponse('Start Date and End Date are required', {
        status: 400,
      });
    }

    if (!params.vacationId) {
      return new NextResponse('VacationId is required', { status: 400 });
    }

    const store = await prismadb.vacation.update({
      where: {
        id: params.vacationId,
      },
      data: {
        userId,
        startDate,
        endDate,
      },
    });

    return NextResponse.json(store);
  } catch (error) {
    console.log('[VACATION_PATCH]', error);
    return new NextResponse('Internal error', { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { vacationId: string } }
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

    if (!params.vacationId) {
      return new NextResponse('VacationId is required', { status: 400 });
    }

    const store = await prismadb.vacation.delete({
      where: {
        id: params.vacationId,
      },
    });

    return NextResponse.json(store);
  } catch (error) {
    console.log('[VACATION_DELETE]', error);
    return new NextResponse('Internal error', { status: 500 });
  }
}
