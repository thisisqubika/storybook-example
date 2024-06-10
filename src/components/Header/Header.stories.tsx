import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from '@mui/material';
import { ThemeWrapper } from '../../common/themes';
import { Header } from '.';

export default {
  component: Header,
} satisfies Meta; // meta

export const Empty: StoryObj = {
  render() {
    return (
      <ThemeWrapper>
        <Header />
      </ThemeWrapper>
    );
  },
}; // const Empty

export const Children: StoryObj = {
  render() {
    return (
      <ThemeWrapper>
        <Header>
          <Typography variant='h6'>Sample header text</Typography>
        </Header>
      </ThemeWrapper>
    );
  },
}; // const Empty