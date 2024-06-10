import { describe, expect, test } from 'vitest';
import { composeStories } from "@storybook/react";
import { render } from '@testing-library/react';
import * as stories from './SearchInput.stories';
import { type SearchInputProps } from './SearchInput';

const {
  Base: SearchInputBaseStory,
} = composeStories(stories);

describe('SearchInput', () => {
  test('stories match snapshot', () => {
    for (const Story of [
      SearchInputBaseStory,
    ]) {
      const props = Story.args as SearchInputProps;
      const { container } = render(
        <Story {...props} />
      );
      expect(container).toMatchSnapshot();
    }
  }); // test

}); // describe 'SearchInput'
