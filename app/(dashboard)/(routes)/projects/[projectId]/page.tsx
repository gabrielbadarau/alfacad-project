import Image from 'next/image';

import { getStandardUsers } from '@/actions/get-standard-users';
import { getMeeting } from '@/actions/get-meeting';
import { cn } from '@/lib/utils';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import ProjectForm from '../components/project-form';
import ProjectComments from '../components/project-comments';

const ProjectPage = async ({ params }: { params: { meetingId: string } }) => {
  console.log('server');
  const standardUsers = await getStandardUsers();
  const meetingData = await getMeeting(params.meetingId);
  const title = meetingData ? 'Editează lucrarea' : 'Creează o lucrare nouă';
  const description = meetingData
    ? 'Editează informațiile pe care dorești sa le modifici si apoi salvează modificările'
    : 'Introdu informațiile de bază si apoi creează';

  return (
    <div className='flex flex-row gap-20 p-8 pt-6 h-full'>
      <div className='w-full'>
        <Tabs defaultValue='summary'>
          <TabsList
            className={cn(
              'grid w-full',
              meetingData ? 'grid-cols-2' : 'grid-cols-1'
            )}
          >
            <TabsTrigger value='summary'>Sumar</TabsTrigger>
            {meetingData && <TabsTrigger value='journal'>Jurnal</TabsTrigger>}
          </TabsList>

          <TabsContent value='summary'>
            <Card>
              <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
              </CardHeader>
              <CardContent className='space-y-2'>
                <ProjectForm initialData={meetingData} users={standardUsers} />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value='journal'>
            <Card>
              <CardHeader>
                <CardTitle>Istoric</CardTitle>
                <CardDescription>
                  Postează detalii referitoare la acestă lucrare
                </CardDescription>
              </CardHeader>
              <CardContent className='space-y-2'>
                <ProjectComments />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
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
