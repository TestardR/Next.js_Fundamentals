import Head from 'next/head';
import Navbar from '../components/Navbar/Navbar';
import '../scss/style.scss';

const Index = () => {
  return (
    <div>
      <Head>
        <title>Awesome tutorial</title>
      </Head>
      <Navbar />

      <div>
        <h1>Next.js</h1>
      </div>
    </div>
  );
};

export default Index;
