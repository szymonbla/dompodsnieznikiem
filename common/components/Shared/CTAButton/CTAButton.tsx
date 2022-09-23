import { Button } from '@mui/material';

interface CTAButtonProps {
  label: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
  handleClick?: () => void;
}

export const CTAButton = ({ label, type, handleClick }: CTAButtonProps) => {
  return (
    <Button
      variant="contained"
      onClick={handleClick}
      type={type}
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
