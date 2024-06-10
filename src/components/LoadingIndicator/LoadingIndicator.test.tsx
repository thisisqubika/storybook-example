import { describe, expect, test } from 'vitest';
import { composeStories } from "@storybook/react";
import { render } from '@testing-library/react';
import * as stories from './LoadingIndicator.stories';
import { type LoadingIndicatorProps } from './LoadingIndicator';

const {
  Base: LoadingIndicatorBaseStory,
  Error: LoadingIndicatorErrorStory,
} = composeStories(stories);

describe('LoadingIndicator', () => {
  test('stories match snapshot', () => {
    for (const Story of [
      LoadingIndicatorBaseStory,
      LoadingIndicatorErrorStory,
    ]) {
      const props = Story.args as LoadingIndicatorProps;
      const { container } = render(
        <Story {...props} />
      );
      expect(container).toMatchSnapshot();
    }
  }); // test

}); // describe 'LoadingIndicator'
