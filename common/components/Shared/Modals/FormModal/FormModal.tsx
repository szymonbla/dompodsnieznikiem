import { Typography, Grid } from '@mui/material';
import { GlobalModal } from 'common/components/Shared/Modals/GlobalModal';
import { useModal } from 'state';

export const FormModal = () => {
  const { isOpen, updateModalState } = useModal();

  const handleClose = () => {
    updateModalState({ isOpen: !isOpen });
  };

  return (
    <GlobalModal title="Zapytaj o dostępność" isOpen={isOpen} handleClose={handleClose}>
      <Grid>
        <Typography>Tutaj pola formularza</Typography>
      </Grid>
    </GlobalModal>
  );
};
