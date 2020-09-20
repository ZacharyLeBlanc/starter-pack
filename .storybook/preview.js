// Import tailwind css
import '../styles/globals.css';

// Use Mock Service Workers
require('../mocks');

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};
