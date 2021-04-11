// Import tailwind css
import '../src/styles/globals.css';

// Use Mock Service Workers
require('../src/mocks');

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};
