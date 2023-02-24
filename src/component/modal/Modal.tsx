import * as React from 'react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

import './modal.scss';

export const ModalWindow = ({ children }: any) => {
  const { t } = useTranslation();
  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button
        variant='outlined'
        sx={{
          color: '#000',
          backgroundColor: '#fff',
          borderColor: '#000',
          '&:hover': {
            backgroundColor: 'gray',
            color: '#fff',
            borderColor: '#fff'
          }
        }}
        onClick={handleOpen}
      >
        {t('login_button')}
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        {children}
      </Modal>
    </div>
  );
};
