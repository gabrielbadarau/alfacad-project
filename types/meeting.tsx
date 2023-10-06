import { User } from '@/types/user';

export interface Meeting {
  id: string;
  title: string | null;
  date: Date;
  time: String;
  users: User[];
  address: string | null;
  description: string;
}
