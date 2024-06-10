import type { Meta, StoryObj } from '@storybook/react';
import { ThemeWrapper } from '../../common/themes';
import { Logo } from '.';

export default {
  component: Logo,
} satisfies Meta; // meta

export const Base: StoryObj = {
  render() {
    return (
      <ThemeWrapper>
        <Logo />
      </ThemeWrapper>
    );
  },
}; // const Base
