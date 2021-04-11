import Head from 'next/head';
import { Header } from '../components/Header';

const Home = () => (
  <main className="antialiased text-gray-900 flex items-center justify-center min-h-screen">
    <Head>
      <title>Starter-Pack</title>
    </Head>

    <Header />
  </main>
);

export default Home;
