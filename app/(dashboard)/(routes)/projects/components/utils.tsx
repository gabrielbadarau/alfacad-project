import {
  ProjectStatusLabels,
  ProjectStatusValues,
} from '@/types/project-status';
import { ProjectTypeLabels, ProjectTypeValues } from '@/types/project-type';
import {
  FileInput,
  Ruler,
  DraftingCompass,
  BookOpenText,
  FileSearch2,
  PackageCheck,
  Hourglass,
  PackageX,
} from 'lucide-react';

const statusesIcons = [
  FileInput,
  Ruler,
  DraftingCompass,
  BookOpenText,
  FileSearch2,
  Hourglass,
  PackageCheck,
  PackageX,
];

export const projectStatuses = Object.keys(ProjectStatusLabels).map(
  (key, index) => ({
    label: ProjectStatusLabels[key as keyof typeof ProjectStatusLabels],
    value: ProjectStatusValues[key as keyof typeof ProjectStatusValues],
    icon: statusesIcons[index],
  })
);

export const projectTypes = Object.keys(ProjectTypeLabels).map((key) => ({
  label: ProjectTypeLabels[key as keyof typeof ProjectTypeLabels],
  value: ProjectTypeValues[key as keyof typeof ProjectTypeValues],
}));

