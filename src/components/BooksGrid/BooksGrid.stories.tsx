import type { Meta, StoryObj } from '@storybook/react';
import { ThemeWrapper } from '../../common/themes';
import { BooksGrid, type BooksGridProps } from '.';
import { searchBooks_ReactWeb } from '../../../test/fixtures/openLibrary';

export default {
  component: BooksGrid,
} satisfies Meta<BooksGridProps>; // meta

const storyData = searchBooks_ReactWeb.docs;

export const Base: StoryObj<BooksGridProps> = {
  args: {
    books: storyData,
  } satisfies BooksGridProps,

  render(props: BooksGridProps) {
    return (
      <ThemeWrapper>
        <BooksGrid {...props} />
      </ThemeWrapper>
    );
  },
}; // const Base
