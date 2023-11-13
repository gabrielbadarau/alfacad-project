import { redirect } from 'next/navigation';

import { currentUser } from '@clerk/nextjs';
import Navbar from '@/components/navbar';

export default async function SetupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await currentUser();

  if (user?.publicMetadata.standardUser) {
    redirect('/overview');
  }

  return (
    <>
      <Navbar hideRoutes={true} />
      <div>{children}</div>
    </>
  );
}
