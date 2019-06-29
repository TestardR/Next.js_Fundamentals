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
      <h1>Hello World From Next JS</h1>
    </div>
  );
};

export default Index;
