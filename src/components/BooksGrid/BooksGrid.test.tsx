import { describe, expect, test } from 'vitest';
import { composeStories } from "@storybook/react";
import { render } from '@testing-library/react';
import * as stories from './BooksGrid.stories';
import { type BooksGridProps } from './BooksGrid';

const {
  Base: BooksGridBaseStory,
} = composeStories(stories);

describe('BooksGrid', () => {
  test('stories match snapshot', () => {
    for (const Story of [
      BooksGridBaseStory,
    ]) {
      const props = Story.args as BooksGridProps;
      const { container } = render(
        <Story {...props} />
      );
      expect(container).toMatchSnapshot();
    }
  }); // test

}); // describe 'BooksGrid'
