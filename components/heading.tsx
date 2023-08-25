import { LucideIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';

interface HeadingProps {
  title: string;
  icon?: LucideIcon;
  onClick?: () => void;
}

export const Heading: React.FC<HeadingProps> = ({
  title,
  icon: Icon,
  onClick,
}) => {
  return (
    <div className='flex flex-row flex-nowrap items-center gap-4'>
      <h2 className='text-2xl font-semibold leading-none tracking-tight'>
        {title}
      </h2>
      {Icon && (
        <Button
          className='h-8 w-12'
          size='icon'
          variant='secondary'
          onClick={onClick}
        >
          <Icon className='h-5 w-5 shrink-0' />
        </Button>
      )}
    </div>
  );
};
