import { SxProps, Theme } from "@mui/material";

export function sxStyles(): Record<string, SxProps<Theme>> {
  return {
    card: {
      display: 'grid',
      gridTemplateColumns: '2fr 1fr',
      padding: '1rem',
    }, // card

    column1: {
      display: 'flex',
      flexDirection: 'column',
      gap: '2px',
    }, // column1

    column2: {
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'center',
    } // column2
  };
}; // sxStyles
