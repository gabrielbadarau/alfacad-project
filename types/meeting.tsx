import { User } from '@/types/user';

export interface Meeting {
  id: string;
  title: string;
  date: Date;
  time: string;
  users: User[];
  address: string;
  description: string;
}
