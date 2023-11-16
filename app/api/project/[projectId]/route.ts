import { NextResponse } from 'next/server';

import { auth } from '@clerk/nextjs';
import { clerkClient } from '@clerk/nextjs';
import prismadb from '@/lib/prismadb';
import { ChangedProjectProperties } from '@/types/project';
import { getFormattedPropertyValue, removeProperty } from '@/lib/utils';

export async function PATCH(
  req: Request,
  { params }: { params: { projectId: string } }
) {
  try {
    const comments = [];
    const { userId: myId } = auth();
    const body = await req.json();
    const user = myId ? await clerkClient.users.getUser(myId) : null;

    if (!myId) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    if (!user?.publicMetadata.standardUser) {
      return new NextResponse('Forbidden', { status: 403 });
    }

    for (const property in body) {
      if (!body[property]) {
        return new NextResponse(`${property} is required`, { status: 400 });
      }
    }

    if (!params.projectId) {
      return new NextResponse('ProjectId is required', { status: 400 });
    }

    const checkVersionConflict = await prismadb.project.findFirst({
      where: { id: params.projectId, version: body.version },
    });

    if (!checkVersionConflict) {
      throw new Error('project-version-conflict');
    }

    const updatedBody = removeProperty(body, 'version');

    for (const property in updatedBody) {
      const comment = `${
        ChangedProjectProperties[
          property as keyof typeof ChangedProjectProperties
        ]
      } lucrării \u21E8 ${getFormattedPropertyValue(property, body[property])}`;

      comments.push(comment);
    }

    const project = await prismadb.project.update({
      where: {
        id: params.projectId,
      },
      data: {
        ...body,
        version: { increment: 1 },
      },
    });

    const combinedComment = comments.reduce((prevValue, currValue) => {
      prevValue = prevValue + ' ' + currValue + ',';

      return prevValue;
    }, 'Am modificat:');

    await prismadb.projectComment.create({
      data: {
        userId: myId,
        projectId: project.id,
        comment: combinedComment.slice(0, -1) + '.',
      },
    });

    return NextResponse.json(project);
  } catch (error) {
    if (
      error instanceof Error &&
      error.message === 'project-version-conflict'
    ) {
      return new NextResponse('Version conflict', { status: 409 });
    }

    console.log('[PROJECT_PATCH]', error);
    return new NextResponse('Internal error', { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { projectId: string } }
) {
  try {
    const { userId: myId } = auth();
    const user = myId ? await clerkClient.users.getUser(myId) : null;

    if (!myId) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    if (!user?.publicMetadata.premiumUser) {
      return new NextResponse('Forbidden', { status: 403 });
    }

    if (!params.projectId) {
      return new NextResponse('ProjectId is required', { status: 400 });
    }

    const project = await prismadb.project.delete({
      where: {
        id: params.projectId,
      },
    });

    return NextResponse.json(project);
  } catch (error) {
    console.log('[PROJECT_DELETE]', error);
    return new NextResponse('Internal error', { status: 500 });
  }
}
