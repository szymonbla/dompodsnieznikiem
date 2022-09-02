import { Button } from '@mui/material';

interface CTAButtonProps {
  label: string;
  handleClick: () => void;
}

export const CTAButton = ({ label, handleClick }: CTAButtonProps) => {
  return (
    <Button
      variant="contained"
      onClick={handleClick}
      sx={{
        color: 'common.white',
        backgroundColor: 'text.secondary',
        fontSize: 'subtitle1',
        p: 2,
        px: 4,
        '&:hover': { backgroundColor: 'grey.800' }
      }}
    >
      {label}
    </Button>
  );
};
