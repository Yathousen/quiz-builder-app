import React from 'react';

const Toggle = ({ onChange, name, value }) => (
  <div className='mt-4'>
    <label className='block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200' htmlFor={name}>
      {name}
    </label>
    <label className='mt-2 inline-flex items-center cursor-pointer' onClick={() => onChange(!value)}>
      <span className='relative'>
        <span className='block w-10 h-6 bg-gray-200 rounded-full shadow-inner'></span>
        <span
          className={`absolute block w-4 h-4 mt-1 ml-1 bg-white rounded-full shadow inset-y-0 left-0 focus-within:shadow-outline transition-transform duration-300 ease-in-out ${
            value ? 'bg-purple-600 transform translate-x-full' : ''
          }`}
        />
      </span>
    </label>
  </div>
);

export default Toggle;
