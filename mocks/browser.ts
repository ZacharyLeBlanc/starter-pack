import { setupWorker } from 'msw';
import { exampleHandlers } from './handlers/example';

export const worker = setupWorker(...exampleHandlers);
