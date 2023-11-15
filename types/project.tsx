import { ProjectComment } from '@prisma/client';

export interface ProjectInfo {
  id: string;
  name: string;
  type: string;
  status: string;
  updatedAt: string;
  version: number;
}

export interface Project {
  info: ProjectInfo;
  comments: ProjectComment;
}

export enum ChangedProjectProperties {
  name = 'numele',
  type = 'tipul',
  status = 'statusul',
}
