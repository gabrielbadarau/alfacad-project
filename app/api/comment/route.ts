import { NextResponse } from 'next/server';

import { auth } from '@clerk/nextjs';
import { clerkClient } from '@clerk/nextjs';
import prismadb from '@/lib/prismadb';

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const user = userId ? await clerkClient.users.getUser(userId) : null;

    const { comment, projectId } = body;

    if (!userId) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    if (!user?.privateMetadata.standardUser) {
      return new NextResponse('Forbidden', { status: 403 });
    }

    if (!comment) {
      return new NextResponse('Comment is required', {
        status: 400,
      });
    }

    const projectComment = await prismadb.projectComment.create({
      data: {
        userId,
        comment,
        projectId,
      },
    });

    return NextResponse.json(projectComment);
  } catch (error) {
    console.log('[COMMENT_POST]', error);
    return new NextResponse('Internal error', { status: 500 });
  }
}
