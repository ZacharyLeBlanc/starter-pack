import React from 'react';
import { AppProps } from 'next/app';
import '../styles/globals.css';

if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
  require('../mocks');
}

const App = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);

export default App;
