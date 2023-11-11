export interface ProjectComments {}

export interface ProjectInfo {
  name: string;
  type: string;
  status: string;
}

export interface Project {
  info: ProjectInfo;
  comments: ProjectComments;
}
