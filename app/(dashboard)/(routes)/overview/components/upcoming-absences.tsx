import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from '@/components/ui/card';
import { Heading } from '@/components/heading';
import CardAbsence from '@/components/card-absence';
import { Vacation } from '@/types/vacation';

interface UpcomingAbsencesProps {
  vacations: Vacation[];
}

const UpcomingAbsences: React.FC<UpcomingAbsencesProps> = ({ vacations }) => (
  <Card>
    <CardHeader>
      <Heading title='Concedii' />
      <CardDescription>Următoarele perioade de concediu</CardDescription>
    </CardHeader>
    <CardContent>
      {vacations.length === 0 ? (
        <p className='py-6 text-center text-sm text-muted-foreground tracking-wide'>
          Niciun concediu planificat
        </p>
      ) : (
        <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {vacations.map((data) => (
            <CardAbsence key={`${data.lastName}-${data.id}`} data={data} />
          ))}
        </div>
      )}
    </CardContent>
  </Card>
);

export default UpcomingAbsences;
