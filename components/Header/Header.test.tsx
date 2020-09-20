import React from 'react';
import { render } from '@testing-library/react';

import { Header } from './index';

describe('Snapshot Tests', () => {
  it('loads and displays greeting', () => {
    const { container } = render(<Header />);
    expect(container).toMatchSnapshot();
  });
});
