import { AppBar, Box, Toolbar } from '@mui/material';
import { sxStyles } from './Header.styles';
import { Logo } from '../Logo';
  
export interface HeaderProps {
  children?: React.ReactNode;
} // interface HeaderProps

export default function Header({
  children,
}: HeaderProps) {
  const styles = sxStyles();
  return (
    <Box sx={styles.root}>
      <AppBar
        data-testid='Header'
        position="static"
        sx={styles.root}
      >
        <Toolbar>
          <Logo sx={{ flexGrow: 1 }}/>
          {children}
        </Toolbar>
      </AppBar>
    </Box>
  );
} // function Header
