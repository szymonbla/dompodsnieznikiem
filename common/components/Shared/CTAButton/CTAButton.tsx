import { Button } from '@mui/material';

interface CTAButtonProps {
  label: string;
}

export const CTAButton = ({ label }: CTAButtonProps) => {
  return (
    <Button
      variant="contained"
      sx={{ color: 'common.white', backgroundColor: 'text.secondary', fontSize: 'subtitle1', p: 2, px: 4 }}
    >
      {label}
    </Button>
  );
};
