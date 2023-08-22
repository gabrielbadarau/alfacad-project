import { redirect } from 'next/navigation';

import { currentUser } from '@clerk/nextjs';
import Navbar from '@/components/navbar';

export default async function SetupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await currentUser();

  if (!user?.privateMetadata.standardUser) {
    redirect('/');
  }

  return (
    <>
      <Navbar />
      <div className='h-[calc(100%-65px)]'>{children}</div>
    </>
  );
}
