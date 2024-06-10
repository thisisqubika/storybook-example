import { Box, Container } from '@mui/material';
import { Header } from '../Header';
import { sxStyles } from './PageLayout.styles';
  
export interface PageLayoutProps {
  children: React.ReactNode;
  header?: React.ReactNode;
} // interface PageLayoutProps

export default function PageLayout({
  children,
  header,
}: PageLayoutProps) {
  const styles = sxStyles();
  return (
    <Container
      data-testid='PageLayout'
      maxWidth='lg'
    >
      <Box sx={styles.root}>
        <Header>
          {header}
        </Header>
        {children}
      </Box>
    </Container>
  );
} // function PageLayout
