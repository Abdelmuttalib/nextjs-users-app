import React from 'react';

import { UnstyledLink } from '@/components/links';

const links = [
  { href: '/', label: 'Route 1' },
  { href: '/', label: 'Route 2' },
];

// Header
const Header = () => {
  return (
    <header className='sticky top-0 z-50'>
      <div className='layout flex h-14 items-center justify-between'>
        <UnstyledLink
          href='/'
          openNewTab
          className='font-bold hover:text-gray-600'
        >
          Home
        </UnstyledLink>
        <nav>
          <ul className='flex items-center justify-between space-x-4'>
            {links.map(({ href, label }) => (
              <li key={`${href}${label}`}>
                <UnstyledLink href={href} className='hover:text-gray-600'>
                  {label}
                </UnstyledLink>
              </li>
            ))}
          </ul>
        </nav>
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

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
