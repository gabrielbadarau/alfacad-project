'use client';

import { AlertCircle } from 'lucide-react';

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

interface ErrorProps {
  error: Error;
}

const Error: React.FC<ErrorProps> = ({ error }) => (
  <div className='flex justify-center p-5'>
    <Alert variant='destructive'>
      <AlertCircle className='h-4 w-4' />
      <AlertTitle>Eroare!</AlertTitle>
      <AlertDescription>{error.message}</AlertDescription>
      <AlertDescription>
        Vă rugăm să reîncărcați pagina. Dacă problemele persistă, contactați
        administratorul.
      </AlertDescription>
    </Alert>
  </div>
);

export default Error;
