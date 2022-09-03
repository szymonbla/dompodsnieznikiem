import { Typography, Grid } from '@mui/material';
import { GlobalModal } from 'common/components/Shared/Modals/GlobalModal';
export const FormModal = () => {
  const handleClose = () => {
    console.log('Close');
  };

  return (
    <GlobalModal title="Zapytaj o dostępność" isOpen={true} handleClose={handleClose}>
      <Grid>
        <Typography>Tutaj pola formularza</Typography>
      </Grid>
    </GlobalModal>
  );
};
