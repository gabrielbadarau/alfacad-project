import { NextResponse } from 'next/server';

import { auth } from '@clerk/nextjs';
import { clerkClient } from '@clerk/nextjs';
import prismadb from '@/lib/prismadb';
import { ProjectTypeLabels } from '@/types/project-type';
import { ProjectStatusLabels } from '@/types/project-status';

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const user = userId ? await clerkClient.users.getUser(userId) : null;

    const { name, type, status } = body;

    if (!userId) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    if (!user?.privateMetadata.standardUser) {
      return new NextResponse('Forbidden', { status: 403 });
    }

    if (!name) {
      return new NextResponse('Name is required', {
        status: 400,
      });
    }

    if (!type) {
      return new NextResponse('Type is required', {
        status: 400,
      });
    }
    if (!status) {
      return new NextResponse('Status is required', {
        status: 400,
      });
    }

    const project = await prismadb.project.create({
      data: {
        name,
        type,
        status,
      },
    });

    await prismadb.projectComments.createMany({
      data: {
        userId: userId,
        projectId: project.id,
        comment: `Am creat lucrarea cu numele <strong>${
          project.name
        }</strong>. Este de tipul <strong>${
          ProjectTypeLabels[project.type as keyof typeof ProjectTypeLabels]
        }</strong> si are statusul <strong>${
          ProjectStatusLabels[
            project.status as keyof typeof ProjectStatusLabels
          ]
        }</strong>`,
      },
    });

    return NextResponse.json(project);
  } catch (error) {
    console.log('[PROJECT_POST]', error);
    return new NextResponse('Internal error', { status: 500 });
  }
}