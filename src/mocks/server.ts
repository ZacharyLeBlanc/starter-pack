import { setupServer } from 'msw/node';
import { exampleHandlers } from './handlers/example';

export const server = setupServer(...exampleHandlers);
