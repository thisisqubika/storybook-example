import { SxProps, Theme } from '@mui/material';

export function sxStyles(): Record<string, SxProps<Theme>> {
  return {
    root: {
      display: 'grid',
      gap: '0.5rem',
      gridTemplateColumns: 'repeat(auto-fill, minmax(30rem, 1fr))',
    }, // root
  };
}; // sxStyles
