import type { TestRunnerConfig } from '@storybook/test-runner';
// import { expect } from '@storybook/test';

const config: TestRunnerConfig = {
  async postVisit(page, _context) {
    const elementHandler = await page.$('#storybook-root');
    if (elementHandler) {
      const innerHTML = await elementHandler.innerHTML();
      expect(innerHTML).toMatchSnapshot();
    }
  },
}; // const config

export default config;