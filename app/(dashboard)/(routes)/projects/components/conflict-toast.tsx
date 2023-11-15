'use client';

import { AlertTriangle } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

interface ConflictToastProps {
  toastDismissAction: () => void;
}

const ConflictToast: React.FC<ConflictToastProps> = ({
  toastDismissAction,
}) => {
  const refresh = () => {
    window.location.reload();
  };

  return (
    <div className='flex flex-col'>
      <CardHeader className='px-0'>
        <CardTitle className='flex justify-center items-center gap-2 text-xl'>
          <AlertTriangle className='h-6 w-6 shrink-0 inline text-destructive' />
          Conflict de versiune
        </CardTitle>
        <CardDescription className='text-justify'>
          Datele lucrării au fost schimbate între timp de către alt utilizator.
          Te rugăm să reîncarci pagina pentru a putea modifica datele.
        </CardDescription>
      </CardHeader>

      <CardFooter className='flex justify-between p-0'>
        <Button variant='outline' onClick={toastDismissAction}>
          Anulează
        </Button>
        <Button onClick={refresh}>Reîncarcă</Button>
      </CardFooter>
    </div>
  );
};

export default ConflictToast;
