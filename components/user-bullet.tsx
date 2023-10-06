import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { User } from '@/types/user';

interface UserBulletProps {
  user: User;
}

const UserBullet: React.FC<UserBulletProps> = ({ user }) => (
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger asChild>
        <Avatar className='h-7 w-7 mr-0.5'>
          <AvatarImage src={user.imageUrl} alt='Avatar' />
          <AvatarFallback className='bg-slate-800 text-white'>
            {user.firstName?.charAt(0)}
            {user.lastName?.charAt(0)}
          </AvatarFallback>
        </Avatar>
      </TooltipTrigger>
      <TooltipContent>
        <p>{`${user.firstName} ${user.lastName}`}</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
);

export default UserBullet;
