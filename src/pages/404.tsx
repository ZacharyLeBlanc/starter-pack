import Head from 'next/head';

const NotFound = () => (
  <>
    <Head>
      <title>Not Found!</title>
    </Head>

    <main className="m-0 p-0 flex justify-center items-center h-3/5-screen">
      <h1 className="text-3xl capitalize text-gray-800 font-bold">
        The page you are looking for wasn&apos;t found!
      </h1>
    </main>
  </>
);

export default NotFound;
