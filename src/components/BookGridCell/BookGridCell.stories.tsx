import type { Meta, StoryObj } from '@storybook/react';
import { ThemeWrapper } from '../../common/themes';
import { BookGridCell, type BookGridCellProps } from '.';
import { searchBooks_ReactWeb } from '../../../test/fixtures/openLibrary';

export default {
  component: BookGridCell,
} satisfies Meta<BookGridCellProps>; // meta

const storyData = searchBooks_ReactWeb.docs.find(({
  author_name, cover_i, language, publish_date, publisher, title,
}) => (
  !!author_name && !!cover_i && !!language && !!publish_date && !!publisher && !!title
)) ?? searchBooks_ReactWeb.docs[1];

export const Base: StoryObj<BookGridCellProps> = {
  args: {
    book: storyData,
  } satisfies BookGridCellProps,

  render(props: BookGridCellProps) {
    return (
      <ThemeWrapper>
        <BookGridCell {...props} />
      </ThemeWrapper>
    );
  },
}; // const Base
