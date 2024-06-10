import { SxProps, Theme } from '@mui/material';

export function sxStyles(): Record<string, SxProps<Theme>> {
  return {
    root: {
      bgcolor: 'background.default',
      height: '100vh',
    }, // root

  };
} // sxStyles
