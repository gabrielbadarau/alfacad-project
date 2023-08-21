import { ScreenShareOff } from 'lucide-react';

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

const NoAccessPage = () => (
  <div className='flex justify-center p-5 shrink-0'>
    <Alert>
      <ScreenShareOff className='h-4 w-4' />
      <AlertTitle>Acces interzis!</AlertTitle>
      <AlertDescription>
        Nu aveți permisiunile necesare pentru a accesa această aplicație. Te
        rugăm sa contactezi administratorul.
      </AlertDescription>
    </Alert>
  </div>
);

export default NoAccessPage;
