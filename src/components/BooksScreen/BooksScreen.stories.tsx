import type { Meta, StoryObj } from '@storybook/react';
import { ThemeWrapper } from '../../common/themes';
import { QueryClientWrapper } from '../../common/query';
import { BooksScreen } from '.';

export default {
  component: BooksScreen,
  decorators: [
    (Story) => (
      <ThemeWrapper>
        <QueryClientWrapper>
          <Story />
        </QueryClientWrapper>
      </ThemeWrapper>
    ),
  ]
} satisfies Meta; // meta

export const Base: StoryObj = {
  render() {
    return (
      <BooksScreen />
    );
  },
}; // const Base
