import { SxProps, Theme } from '@mui/material';

export function sxStyles(): Record<string, SxProps<Theme>> {
  return {
    errorIcon: {
      height: '5rem',
      width: '5rem',
    },
    
    root: {
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      height: '50vh',
      justifyContent: 'center',
      margin: '1rem',
      padding: '1rem',
    }, // root

  };
} // sxStyles
