import { FolderPlus } from 'lucide-react';
import { useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';

const NewProjectButton = () => {
  const router = useRouter();

  return (
    <div className='text-right'>
      <Button
        onClick={() => router.push('/projects/new')}
        className='h-8 p-2 lg:p-3 '
      >
        <FolderPlus className='h-4 w-4 shrink-0' />
      </Button>
    </div>
  );
};

export default NewProjectButton;
