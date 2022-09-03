import { Box, Modal, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { ReactNode } from 'react';

interface GlobalModalProps {
  title: string;
  isOpen: boolean;
  handleClose: () => void;
  children: ReactNode;
}

export const GlobalModal = ({ title, isOpen, handleClose, children }: GlobalModalProps) => {
  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
    >
      <Box sx={{ backgroundColor: 'grey.200', minWidth: '700px', p: '2rem', position: 'relative' }}>
        <CloseIcon onClick={handleClose} sx={{ position: 'absolute', right: '2rem', top: '2rem', cursor: 'pointer' }} />
        <Typography variant="h4">{title}</Typography>
        {children}
      </Box>
    </Modal>
  );
};
