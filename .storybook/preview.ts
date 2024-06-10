import type { Preview } from "@storybook/react";
import { initialize, mswLoader } from 'msw-storybook-addon';

// See <https://github.com/mswjs/msw-storybook-addon#configuring-msw>.
initialize({
  onUnhandledRequest: 'bypass',
});

const preview: Preview = {
  loaders: [
    mswLoader
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}; // const preview

export default preview;
