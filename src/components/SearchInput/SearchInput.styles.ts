import { SxProps, Theme, alpha, styled } from "@mui/material";

export const Search = styled('div')(({ theme }) => ({
  alignItems: 'center',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
})); // const Search

export function sxStyles(): Record<string, SxProps<Theme>> {
  return {
    textField: {
      // color: 'white',
      width: '100%',
    }, // textField
  };
}; // sxStyles
