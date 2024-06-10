import { describe, expect, test } from 'vitest';
import { composeStories } from "@storybook/react";
import { render } from '@testing-library/react';
import * as stories from './PageLayout.stories';
import { type PageLayoutProps } from './PageLayout';

const {
  Base: PageLayoutBaseStory,
} = composeStories(stories);

describe('PageLayout', () => {
  test('stories match snapshot', () => {
    for (const Story of [
      PageLayoutBaseStory,
    ]) {
      const props = Story.args as PageLayoutProps;
      const { container } = render(
        <Story {...props} />
      );
      expect(container).toMatchSnapshot();
    }
  }); // test

}); // describe 'PageLayout'
