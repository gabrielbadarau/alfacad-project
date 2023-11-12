import Image from 'next/image';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { getStandardUsers } from '@/actions/get-standard-users';
import { getProject } from '@/actions/get-project';
import { cn } from '@/lib/utils';

import ProjectForm from '../components/project-form';
import ProjectComments from '../components/project-comments';

const ProjectPage = async ({ params }: { params: { projectId: string } }) => {
  const standardUsers = await getStandardUsers();
  const projectData = await getProject(params.projectId);

  const title = projectData ? 'Editează lucrarea' : 'Creează o lucrare nouă';
  const description = projectData
    ? 'Editează informațiile pe care dorești sa le modifici si apoi salvează modificările'
    : 'Introdu informațiile de bază si apoi creează';

  return (
    <div className='flex flex-row gap-20 p-8 pt-6 h-full'>
      <div className='w-full'>
        <Tabs defaultValue='summary'>
          <TabsList
            className={cn(
              'grid w-full',
              projectData ? 'grid-cols-2' : 'grid-cols-1'
            )}
          >
            <TabsTrigger value='summary'>Sumar</TabsTrigger>
            {projectData && <TabsTrigger value='journal'>Jurnal</TabsTrigger>}
          </TabsList>

          <TabsContent value='summary'>
            <Card>
              <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
              </CardHeader>
              <CardContent className='space-y-2'>
                <ProjectForm initialData={projectData?.info} />
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
                <ProjectComments
                  comments={projectData?.comments}
                  users={standardUsers}
                />
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
