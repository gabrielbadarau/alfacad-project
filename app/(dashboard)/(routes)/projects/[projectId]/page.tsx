import Image from 'next/image';

import { getStandardUsers } from '@/actions/get-standard-users';
import { getMeeting } from '@/actions/get-meeting';

import ProjectForm from '../components/project-form';

const ProjectPage = async ({ params }: { params: { meetingId: string } }) => {
  const standardUsers = await getStandardUsers();

  const meetingData = await getMeeting(params.meetingId);

  return (
    <div className='flex flex-row gap-20 p-8 pt-6 h-full'>
      <div className='w-full space-y-4'>
        <ProjectForm initialData={meetingData} users={standardUsers} />
      </div>

      <div className='hidden xl:block'>
        <Image
          priority
          src='/project.svg'
          height={1300}
          width={1300}
          alt='Picture of a man launching a rocket'
        />
      </div>
    </div>
  );
};

export default ProjectPage;
