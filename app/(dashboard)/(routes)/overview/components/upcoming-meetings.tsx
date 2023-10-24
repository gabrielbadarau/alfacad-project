import { Heading } from '@/components/heading';
import CardMeeting from '@/components/card-meeting';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from '@/components/ui/card';
import { Meeting } from '@/types/meeting';

interface UpcomingMeetingsProps {
  meetings: Meeting[];
}

const UpcomingMeetings: React.FC<UpcomingMeetingsProps> = ({ meetings }) => (
  <Card>
    <CardHeader>
      <Heading title='Întâlniri' />
      <CardDescription>Următoarele întâlniri planificate</CardDescription>
    </CardHeader>
    <CardContent>
      {!meetings.length ? (
        <p className='py-6 text-center text-sm text-muted-foreground tracking-wide'>
          Nicio întâlnire planificată
        </p>
      ) : (
        <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
          {meetings.map((meeting) => (
            <CardMeeting
              key={`${meeting.title}-${meeting.id}`}
              data={meeting}
            />
          ))}
        </div>
      )}
    </CardContent>
  </Card>
);

export default UpcomingMeetings;
