import { SxProps, Theme } from "@mui/material";

export interface SxStylesProps {
  sx?: SxProps<Theme>;
} // interface SxStylesProps

export function sxStyles({
  sx,
}: SxStylesProps) {
  return {
    root: [
      {
        bgcolor: 'primary.main',
        color: 'white',
      },
      ...(Array.isArray(sx) ? sx : [sx]),
    ], // root
  };
} // sxStyles
