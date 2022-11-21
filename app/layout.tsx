import '@/styles/globals.css';

import { UnstyledLink } from '@/components/links';

import Vercel from '~/svg/Vercel.svg';

// const headerNavLinks = [
//   { href: '/', label: 'Route 1' },
//   { href: '/', label: 'Route 2' },
// ];

// Header
const Header = () => {
  return (
    <header className='sticky top-0 z-50'>
      <div className='layout flex h-14 items-center justify-between rounded-md bg-white/30 px-6 backdrop-blur-sm'>
        <UnstyledLink
          href='/'
          openNewTab
          className='inline-flex items-center gap-1 border-b-2 border-transparent font-bold duration-150 ease-linear hover:border-primary-600'
        >
          <Vercel />
          Users App
        </UnstyledLink>
        {/* <nav>
          <ul className='flex items-center justify-between space-x-4'>
            {headerNavLinks.map(({ href, label }) => (
              <li key={`${href}${label}`}>
                <UnstyledLink href={href} className='hover:text-gray-600'>
                  {label}
                </UnstyledLink>
              </li>
            ))}
          </ul>
        </nav> */}
      </div>
    </header>
  );
};

// Footer
const Footer = () => {
  return (
    <footer className='mt-20 w-full py-6 text-center text-gray-700'>
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
    <html>
      <head />
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
