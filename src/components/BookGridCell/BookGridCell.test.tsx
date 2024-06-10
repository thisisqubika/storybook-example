import { describe, expect, test } from 'vitest';
import { composeStories } from "@storybook/react";
import { render } from '@testing-library/react';
import * as stories from './BookGridCell.stories';
import { type BookGridCellProps } from './BookGridCell';

const {
  Base: BookGridCellBaseStory,
} = composeStories(stories);

describe('BookGridCell', () => {
  test('stories match snapshot', () => {
    for (const Story of [
      BookGridCellBaseStory,
    ]) {
      const props = Story.args as BookGridCellProps;
      const { container } = render(
        <Story {...props} />
      );
      expect(container).toMatchSnapshot();
    }
  }); // test

}); // describe 'BookGridCell'
