import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { ThemeWrapper } from '../../common/themes';
import { SearchInput, type SearchInputProps } from '.';

export default {
  component: SearchInput,
} satisfies Meta<SearchInputProps>; // meta

export const Base: StoryObj<SearchInputProps> = {
  args: {
    color: 'black',
    disabled: false,
    initialTerm: '',
    onSearch: fn(),
  } satisfies SearchInputProps,

  render(props: SearchInputProps) {
    return (
      <ThemeWrapper>
        <SearchInput {...props} />
      </ThemeWrapper>
    );
  }, // render

}; // const Base
