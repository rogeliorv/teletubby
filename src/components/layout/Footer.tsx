/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';

import config from '../../config/index.json';

const Footer = () => {
  const { company, about } = config;
  const { logo, name: companyName } = company;
  const { sections } = about;

  return (
    <div
      id='about'
      className='container mx-auto px-4 py-12 sm:px-6 lg:px-12 xl:px-20'
    >
      <div className='flex flex-col items-center justify-center'>
        <div>
          <img src={logo} alt={companyName} className='h-16 w-16 rounded-xl' />
        </div>
        <div className='my-4 flex flex-wrap items-center justify-center gap-8 sm:gap-10'>
          {sections.map((section, index) => (
            <a
              key={`${section.name}-${index}`}
              href={section.href}
              className='cursor-pointer text-base leading-4 text-gray-800 hover:text-primary dark:text-gray-400 dark:hover:text-white'
            >
              {section.name}
            </a>
          ))}
        </div>
        <div className='mt-6 flex items-center'>
          <p className='mt-6 text-xs leading-none text-gray-900 dark:text-gray-50 lg:text-sm'>
            &copy; {new Date().getFullYear()} made with ☕ by{' '}
            <Link href='https://github.com/rogeliorv'>@rogeliorv</Link>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Footer;
