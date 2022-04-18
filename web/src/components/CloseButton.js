import React from 'react';

const CloseButton = ({ onClick, disabled, className, width = 4, height = 4 }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    type='button'
    className={`bg-white rounded-md ml-1 p-1 inline-flex items-center justify-center text-gray-400 hover:bg-red-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 ${className}`}
  >
    <svg
      className={`h-${width} w-${height}`}
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'
      aria-hidden='true'
    >
      <path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M6 18L18 6M6 6l12 12' />
    </svg>
  </button>
);

export default CloseButton;
