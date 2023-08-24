'use client';

import { Modal } from '@/components/modal';
import { Button } from '@/components/ui/button';

interface DeleteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  loading: boolean;
}

const DeleteModal: React.FC<DeleteModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  loading,
}) => (
  <Modal
    title='Sunteți sigur?'
    description='Aceasta este o acțiune ireversibilă.'
    isOpen={isOpen}
    onClose={onClose}
    footer={
      <>
        <Button
          className='mt-3 sm:mt-auto'
          disabled={loading}
          variant='outline'
          onClick={onClose}
        >
          Anulează
        </Button>
        <Button disabled={loading} variant='destructive' onClick={onConfirm}>
          Șterge
        </Button>
      </>
    }
  />
);

export default DeleteModal;
