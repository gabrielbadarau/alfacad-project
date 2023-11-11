export interface ProjectComments {}

export interface ProjectInfo {
  name: string;
  type: string;
  status: string;
  updatedAt: string;
}

export interface Project {
  info: ProjectInfo;
  comments: ProjectComments;
}
