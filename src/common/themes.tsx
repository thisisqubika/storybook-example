// Check out <https://zenoo.github.io/mui-theme-creator/>.
import {
  createTheme, CssBaseline, ThemeProvider, ThemeOptions,
} from '@mui/material';

export const themeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#812020',
    },
    secondary: {
      main: '#cc8333',
    },
    background: {
      default: '#e0cab8',
      paper: '#efe8e2',
    },
    error: {
      main: '#fb3636',
    },
    info: {
      main: '#025e90',
    },
    warning: {
      main: '#e49e01',
    },
    success: {
      main: '#2b9430',
    },
  },
  typography: {
    fontFamily: 'Lora',
    fontSize: 13,
  },
}; // const themeOptions

export interface ThemeWrapperProps {
  children: JSX.Element;
} // interface ThemeWrapperProps

export function ThemeWrapper({
  children,
}: ThemeWrapperProps) {
  return (
    <ThemeProvider theme={createTheme(themeOptions)}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
} // function ThemeWrapper
