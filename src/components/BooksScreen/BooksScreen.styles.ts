import { SxProps, Theme } from "@mui/material";

export function sxStyles(): Record<string, SxProps<Theme>> {
  return {
    main: {
      bgcolor: 'background.paper',
      display: 'flex', 
      flexDirection: 'column',
      gap: '0.5rem',
      margin: '1rem',
      padding: '1rem',
    }, // main
  };
} // function sxStyles
