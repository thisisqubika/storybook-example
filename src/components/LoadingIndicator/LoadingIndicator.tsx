import { CircularProgress, Paper, Typography } from '@mui/material';
import ErrorIcon from '@mui/icons-material/Error';
import { sxStyles } from './LoadingIndicator.styles';

export interface LoadingIndicatorProps {
  errorMessage?: React.ReactNode;
} // interface LoadingIndicatorProps

export default function LoadingIndicator({
  errorMessage,
}: LoadingIndicatorProps) {
  const styles = sxStyles();
  return (
    <Paper
      data-testid='Loading'
      sx={styles.root}
      variant='outlined'
    >
      {errorMessage ? (
        <>
          {errorMessage}
          <ErrorIcon color='error' sx={styles.errorIcon} />
        </>
      ) : (
        <>
          <Typography variant='h5'>Loading, please wait...</Typography>
          <CircularProgress size='5rem' />
        </>
      )}
    </Paper>
  );
} // function Loading
