import { ReactNode } from 'react';

import { Box, Modal, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

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
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        '& .MuiDialog-scrollPaper': {
          color: 'red'
        }
      }}
    >
      <Box sx={{ backgroundColor: 'grey.200', minWidth: '400px', maxWidth: '500px', p: '2rem' }} id="test">
        <CloseIcon
          onClick={handleClose}
          sx={(theme) => ({
            position: 'absolute',
            width: '3rem',
            height: '3rem',
            right: '2rem',
            top: '2rem',
            cursor: 'pointer',
            [theme.breakpoints.down('md')]: {
              right: 0,
              top: 0,
              color: 'text.secondary',
              backgroundColor: 'primary.main'
            }
          })}
        />
        <Typography variant="h4">{title}</Typography>
        {children}
      </Box>
    </Modal>
  );
};
