import Image from 'next/image';

import { getStandardUsers } from '@/actions/get-standard-users';
import { getMeeting } from '@/actions/get-meeting';
import { cn } from '@/lib/utils';

import ProjectForm from '../components/project-form';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const ProjectPage = async ({ params }: { params: { meetingId: string } }) => {
  console.log('server');
  const standardUsers = await getStandardUsers();
  const meetingData = await getMeeting(params.meetingId);
  const title = meetingData ? 'Editează proiectul' : 'Creează un proiect nou';
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
                  Postează detalii referitoare la acest proiect
                </CardDescription>
              </CardHeader>
              <CardContent className='space-y-2'>
                <div className='space-y-1'>
                  <Label htmlFor='current'>Current password</Label>
                  <Input id='current' type='password' />
                </div>
                <div className='space-y-1'>
                  <Label htmlFor='new'>New password</Label>
                  <Input id='new' type='password' />
                </div>
              </CardContent>
              <CardFooter>
                <Button>Save password</Button>
              </CardFooter>
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
