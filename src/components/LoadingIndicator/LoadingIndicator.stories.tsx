import type { Meta, StoryObj } from '@storybook/react';
import { ThemeWrapper } from '../../common/themes';
import { LoadingIndicator, type LoadingIndicatorProps } from '.';
import { Typography } from '@mui/material';

export default {
  component: LoadingIndicator,
} satisfies Meta<LoadingIndicatorProps>; // meta

export const Base: StoryObj<LoadingIndicatorProps> = {
  args: {
  } satisfies LoadingIndicatorProps,

  render() {
    return (
      <ThemeWrapper>
        <LoadingIndicator />
      </ThemeWrapper>
    );
  },
}; // const Base

export const Error: StoryObj<LoadingIndicatorProps> = {
  args: {
    errorMessage: (
      <Typography variant='h5' color='error'>Errare humanum est!</Typography>
    ),
  } satisfies LoadingIndicatorProps,

  render(props: LoadingIndicatorProps) {
    return (
      <ThemeWrapper>
        <LoadingIndicator {...props} />
      </ThemeWrapper>
    );
  },
}; // const Base
