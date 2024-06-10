import { afterEach, expect } from 'vitest';
import { cleanup } from '@testing-library/react';
import * as matchers from '@testing-library/jest-dom/matchers';

function setupTests() {
  // Add JSDOM matchers
  expect.extend(matchers);

  // Testing library setup.
  afterEach(() => {
    cleanup();
  });
} // function setupTests

setupTests();
