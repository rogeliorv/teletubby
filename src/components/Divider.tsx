import React from 'react';

type DividerProps = {
  width?: string;
};
const Divider = ({ width = 'w-64' }: DividerProps) => {
  return (
    <div className='mb-4 w-full'>
      <div
        className={`mx-auto h-1 bg-primary ${width} my-0 mb-10 rounded-t py-0 opacity-25`}
      ></div>
    </div>
  );
};

export default Divider;
