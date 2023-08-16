import { MonitorOff } from 'lucide-react';

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

const NotFound = () => (
  <div className='flex justify-center p-5'>
    <Alert>
      <MonitorOff className='h-4 w-4' />
      <AlertTitle>Pagina nu a fost găsită!</AlertTitle>
      <AlertDescription>
        Asigurați-vă că adresa URL este corectă sau încercați să navigați către
        altă parte a site-ului. Dacă aveți întrebări sau aveți nevoie de
        asistență, contactați administratorul.
      </AlertDescription>
    </Alert>
  </div>
);

export default NotFound;
