import React, { ReactNode } from 'react';

const ErrorMessage = ({
  children,
  showTag,
  onClose,
}: {
  children?: ReactNode;
  showTag?: boolean;
  onClose?: () => void;
}) => (
  <div className='pt-4 text-center lg:px-4'>
    <div
      className=' flex items-center bg-tertiary p-2 leading-none text-indigo-100 lg:inline-flex lg:rounded-full'
      role='alert'
    >
      {showTag && (
        <span className='mr-3 flex rounded-full bg-primary px-2 py-1 text-xs font-bold uppercase'>
          Error
        </span>
      )}
      <span className='flex-auto px-2 text-left font-semibold text-primary'>
        {children}
      </span>
      {onClose && (
        <svg
          onClick={onClose}
          className='h-6 w-6 fill-current text-red-500'
          role='button'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 20 20'
        >
          <title>Close</title>
          <path d='M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z' />
        </svg>
      )}
    </div>
  </div>
);

export default ErrorMessage;
