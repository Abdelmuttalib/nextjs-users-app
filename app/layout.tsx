import '@/styles/globals.css';

import { UnstyledLink } from '@/components/links';

import Vercel from '~/svg/Vercel.svg';

// Header
const Header = () => {
  return (
    <header className='sticky top-0 z-50'>
      <div className='layout flex h-14 items-center justify-between rounded-md bg-white/30 px-6 backdrop-blur-sm'>
        <UnstyledLink
          href='/'
          className='inline-flex items-center gap-1 border-b-2 border-transparent font-bold duration-150 ease-linear hover:border-primary-600 hover:bg-primary-50'
        >
          <Vercel />
          Users App
        </UnstyledLink>
      </div>
    </header>
  );
};

// Footer
const Footer = () => {
  return (
    <footer className='relative mt-20 w-full border-t border-gray-100 py-6 text-center text-sm text-gray-500'>
      © {new Date().getFullYear()}
    </footer>
  );
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head />
      <body>
        <Header />
        <main className='min-h-[85vh]'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
