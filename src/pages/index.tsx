import Link from 'next/link';
import * as React from 'react';

import Header from '@/components/Header';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

import Canvas from '../components/Canvas';

const HomePage = () => {
  return (
    <Layout>
      <Seo />
      <div className='overflow-hidden bg-background'>
        <div className='relative mx-auto w-full bg-background lg:max-w-5xl'>
          <Header />
        </div>
        <div className='mx-auto mt-6 w-full px-2 md:mt-8 md:max-w-5xl md:px-4'>
          <>
            <h1 className='mx-auto mb-12 flex flex-col items-center justify-center text-4xl sm:flex-row sm:text-4xl'>
              <div className='mx-auto text-center sm:mx-1'>
                Project sponsored by <Link href="https://chonki.ai">Chonki.ai</Link>
              </div>
            </h1>
            <div className='my-16 md:my-24'>
            </div>
          </>
        </div>
        <Canvas />
      </div>
    </Layout>
  );
}

export default HomePage;