import Vercel from '~/svg/Vercel.svg';

/**
  <link
              rel='preload'
              href='/fonts/inter-var-latin.woff2'
              as='font'
              type='font/woff2'
              crossOrigin='anonymous'
            />
*/

const HomePage = () => {
  return (
    <main>
      <section className='bg-white'>
        <div className='layout flex min-h-screen flex-col items-center justify-center text-center'>
          <Vercel className='text-7xl' />
          <h1 className='mt-6 text-7xl'>Nextjs Users app</h1>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
