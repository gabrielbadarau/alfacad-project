import Image from 'next/image';

import MeetingForm from './components/meeting-form';

const MeetingPage = async ({ params }: { params: { sizeId: string } }) => {
  console.log(params);

  return (
    <div className='flex flex-row gap-20 p-8 pt-6 h-full'>
      <div className='w-full min-w-[348px] space-y-4'>
        <MeetingForm initialData={null} />
      </div>

      <div className='hidden lg:block'>
        <Image
          priority
          src='/meeting.svg'
          height={1300}
          width={1300}
          alt='Picture of two people shaking hands'
        />
      </div>
    </div>
  );
};

export default MeetingPage;
