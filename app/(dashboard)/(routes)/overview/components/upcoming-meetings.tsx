import { Heading } from '@/components/heading';
import CardMeeting from '@/components/card-meeting';
import { Meeting } from '@/types/meeting';

interface UpcomingMeetingsProps {
  meetings: Meeting[];
}

const UpcomingMeetings: React.FC<UpcomingMeetingsProps> = ({ meetings }) => (
  <>
    <Heading title='Următoarele întâlniri' />

    {!meetings.length ? (
      <p className='py-6 text-center text-sm text-muted-foreground tracking-wide'>
        Nicio întâlnire planificată
      </p>
    ) : (
      <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
        {meetings.map((meeting) => (
          <CardMeeting key={`${meeting.title}-${meeting.id}`} data={meeting} />
        ))}
      </div>
    )}
  </>
);

export default UpcomingMeetings;
