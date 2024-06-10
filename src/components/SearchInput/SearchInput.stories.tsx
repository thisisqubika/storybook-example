import type { Meta, StoryObj } from '@storybook/react';
import { expect, fn, userEvent, within } from '@storybook/test';
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

  async play({ args, canvasElement }) {
    const canvas = within(canvasElement);
    const searchInput = canvas.getByTestId('SearchInput.input');
    const testInputText = 'Book search';
    await userEvent.type(searchInput, testInputText, { delay: 100 });
    const iconButton = canvas.getByRole('button');
    await userEvent.click(iconButton);
    await expect(args.onSearch).toHaveBeenCalledWith(testInputText);
  }, // play

}; // const Base
