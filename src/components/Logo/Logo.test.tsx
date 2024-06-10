import { describe, expect, test } from 'vitest';
import { composeStories } from "@storybook/react";
import { render } from '@testing-library/react';
import * as stories from './Logo.stories';
import { type LogoProps } from './Logo';

const {
  Base: LogoBaseStory,
} = composeStories(stories);

describe('Logo', () => {
  test('stories match snapshot', () => {
    for (const Story of [LogoBaseStory]) {
      const props = Story.args as LogoProps;
      const { container } = render(
        <Story {...props} />
      );
      expect(container).toMatchSnapshot();
    }
  }); // test

}); // describe 'Logo'
