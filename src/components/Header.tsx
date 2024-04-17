/* eslint-disable @next/next/no-img-element */
import { Popover, Transition } from '@headlessui/react';
import { Bars4Icon as MenuIcon } from '@heroicons/react/24/outline';
import { XMarkIcon as XIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import React, { Fragment, useState } from 'react';
import { FaRegGem as FeatureRequestIcon } from 'react-icons/fa';
import { MdOutlineContactSupport as SupportIcon } from 'react-icons/md';
import { MdOutlineFeedback as FeedbackIcon } from 'react-icons/md';

import ErrorMessage from '@/components/ErrorMessage';

import config from '../config/index.json';

export const HeaderPopover = () => {
  const { company } = config;
  const { logo } = company;

  return (
    <Popover className='mx-2 self-center sm:mx-0'>
      <nav className='relative flex items-center justify-between gap-8 sm:h-10 lg:justify-start'>
        <div className='flex flex-shrink-0 flex-grow items-center lg:flex-grow-0'>
          <div className='flex w-full items-center justify-between md:w-auto'>
            <div className='flex items-center '>
              <Popover.Button className='inline-flex items-center justify-center rounded-md bg-background p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary'>
                <span className='sr-only'>Open main menu</span>
                <MenuIcon className='h-6 w-6' aria-hidden='true' />
              </Popover.Button>
            </div>
          </div>
        </div>
      </nav>
      <Transition
        as={Fragment}
        enter='duration-150 ease-out'
        enterFrom='opacity-0 scale-95'
        enterTo='opacity-100 scale-100'
        leave='duration-100 ease-in'
        leaveFrom='opacity-100 scale-100'
        leaveTo='opacity-0 scale-95'
      >
        <Popover.Panel
          focus
          className='absolute left-auto right-0 top-0 z-[300] w-72 origin-top-right transform p-2 transition sm:max-w-xl md:left-auto md:right-0'
        >
          <div className='overflow-hidden rounded-lg bg-background shadow-md ring-1 ring-black ring-opacity-5'>
            <div className='flex items-center justify-between px-5 pt-4'>
              <div>
                <img className='h-8 w-auto' src={logo} alt='' />
              </div>
              <div className='-mr-2'>
                <Popover.Button className='inline-flex items-center justify-center rounded-md bg-background p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary'>
                  <span className='sr-only'>Close main menu</span>
                  <XIcon className='h-6 w-6' aria-hidden='true' />
                </Popover.Button>
              </div>
            </div>
            <div className='space-y-1 px-2 pt-2 pb-3'>
              <Link
                href='/'
                className='block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900'
              >
                Home
              </Link>
              <Link
                href='/'
                className='block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900'
              >
                Blog
              </Link>
              <hr />
              <Link
                href='/'
                className='flex flex-row gap-1 rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900'
              >
                <SupportIcon /> Help
              </Link>
              <Link
                href='/'
                className='flex flex-row gap-1 rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900'
              >
                <FeedbackIcon /> Send us feedback
              </Link>
              <Link
                href='/'
                className='flex flex-row gap-1 rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900'
              >
                <FeatureRequestIcon /> Request a feature
              </Link>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export const HeaderLogo = () => {
  const { company } = config;
  const { name: companyName } = company;

  return (
    <Link href='/' className='hidden flex-row self-center md:flex '>
      <span className='sr-only'>{companyName}</span>
      <span className='flex h-10 w-10 items-center rounded-xl bg-primary md:h-16 md:w-16'>
        <svg
          className='m-auto h-7 w-7 md:h-12 md:w-12'
          xmlns='http://www.w3.org/2000/svg'
          version='1.1'
          width={50}
          height={50}
          viewBox='0 0 100 100'
        >
          <g fill='#FFFFFF'>
            <path d='M31.801 22.699a9.294 9.294 0 0 0-5.742-8.59 9.302 9.302 0 0 0-12.152 12.149 9.3 9.3 0 0 0 17.895-3.559zm-12.5 0c0-1.344.816-2.55 2.063-3.055a3.296 3.296 0 0 1 3.605.758 3.308 3.308 0 0 1 .652 3.633A3.308 3.308 0 0 1 22.501 26a3.3 3.3 0 0 1-3.2-3.301zM77.5 55.5a9.303 9.303 0 0 0-8.594 5.742A9.302 9.302 0 0 0 81.06 73.391 9.294 9.294 0 0 0 86.8 64.8a9.3 9.3 0 0 0-9.3-9.3zm0 12.602a3.293 3.293 0 0 1-3.047-2.04 3.298 3.298 0 0 1 4.309-4.312 3.302 3.302 0 0 1-1.262 6.352z'></path>
            <path d='M97.5 64.199a20 20 0 0 0-39.898 0 20.67 20.67 0 0 0 4.2 13.699l8.898 12-46-7.2a13.799 13.799 0 0 1-5.399-25.3l4.102-2.698h-.004a2.968 2.968 0 0 0 1.5-1l13.402-17.898a20.705 20.705 0 0 0 4.2-13.7 20.303 20.303 0 0 0-20-19.1 20.305 20.305 0 0 0-20 19.101 20.694 20.694 0 0 0 4.3 13.699L18.1 51 16 52.398A19.801 19.801 0 0 0 10.3 80a19.907 19.907 0 0 0 13.4 8.602L77 97h.5c.945 0 1.832-.445 2.398-1.2L93.2 77.9a20.695 20.695 0 0 0 4.301-13.7zm-85.898-32a14.691 14.691 0 0 1-3-9.7C9 15.9 14.302 9 22.5 9s13.5 6.9 14 13.5a14.691 14.691 0 0 1-3 9.7l-11 14.699zm76.797 42.102L77.501 89l-11-14.699a14.698 14.698 0 0 1-3-9.7c.398-6.6 5.8-13.5 14-13.5s13.5 6.9 14 13.5a14.7 14.7 0 0 1-3.102 9.7z'></path>
          </g>
        </svg>
      </span>
      <span className='hidden self-center pl-2 text-xl font-bold text-primary md:inline'>
        {' '}
        {companyName}{' '}
      </span>
    </Link>
  );
};

const Header = () => {
  const [headerErrorMessage, setHeaderErrorMessage] = useState('');

  return (
    <>
      <div
        className='flex flex-row justify-between px-2 pt-3 md:gap-x-4'
        id='header'
      >
        <HeaderLogo />
        <HeaderPopover />
      </div>
      {headerErrorMessage && (
        <ErrorMessage showTag={false} onClose={() => setHeaderErrorMessage('')}>
          {headerErrorMessage}
        </ErrorMessage>
      )}
    </>
  );
};

export default Header;
