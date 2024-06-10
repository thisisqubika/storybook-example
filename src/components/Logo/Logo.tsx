import { SxProps, Theme, Typography } from '@mui/material';
import { sxStyles } from './Logo.styles';

export interface LogoProps {
  sx?: SxProps<Theme>;
} // interface LogoProps

export default function Logo({
  sx,
}: LogoProps) {
  const styles = sxStyles({ sx });
  return (
    <Typography
      data-testid='Logo'
      sx={styles.root}
      variant='h3'
    >
      Books
    </Typography>
  );
} // function Logo
