'use client';

import { useEffect, useState } from 'react';

import { Modal } from '@/components/modal';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface CreateMeetingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  loading: boolean;
}

const CreateMeetingModal: React.FC<CreateMeetingModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  loading,
}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <Modal
      title='Edit profile'
      description='Make changes to your profile here. Click save when you arere done.'
      isOpen={true}
      onClose={onClose}
    >
      <div className='grid gap-4 py-4'>
        <div className='grid gap-2'>
          <Label htmlFor='name'>Name</Label>
          <Input id='name' autoFocus />
        </div>
        <div className='grid gap-2'>
          <Label htmlFor='description'>Description</Label>
          <Input id='description' />
        </div>
      </div>
      <div className='pt-4 space-x-2 flex items-center justify-end w-full'>
        <Button className='w-full sm:w-auto' disabled={loading} type='submit'>
          Save changes
        </Button>
      </div>
    </Modal>
  );
};

export default CreateMeetingModal;
