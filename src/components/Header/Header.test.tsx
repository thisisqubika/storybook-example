import { describe, expect, test } from 'vitest';
import { composeStories } from "@storybook/react";
import { render } from '@testing-library/react';
import * as stories from './Header.stories';
import { type HeaderProps } from './Header';

const {
  Children: HeaderChildrenStory,
  Empty: HeaderEmptyStory,
} = composeStories(stories);

describe('Header', () => {
  test('stories match snapshot', () => {
    for (const Story of [
      HeaderChildrenStory,
      HeaderEmptyStory,
    ]) {
      const props = Story.args as HeaderProps;
      const { container } = render(
        <Story {...props} />
      );
      expect(container).toMatchSnapshot();
    }
  }); // test

}); // describe 'Header'
