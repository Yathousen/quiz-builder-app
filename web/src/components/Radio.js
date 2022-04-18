import React, { useCallback } from 'react';

const Radio = ({ onChange, name, options = [], disabled, ...rest }) => {
  const onSelect = useCallback(
    (i) => (e) => {
      let nOptions = [...options].map((o, ii) =>
        ii === i ? { ...o, selected: e.target.checked } : { ...o, selected: false },
      );
      onChange(nOptions);
    },
    [options, onChange],
  );

  return (
    <div classNameName='mt-4'>
      <label classNameName='block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200' htmlFor={name}>
        {name}
      </label>
      {options.map((o, i) => (
        <div className='flex items-center mt-4'>
          <input
            key={i}
            type='radio'
            value='USA'
            className='w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600'
            aria-labelledby='country-option-1'
            aria-describedby='country-option-1'
            checked={o.selected}
            onChange={onSelect(i)}
          />
          <label
            className='block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'
            onClick={() => onSelect(i)({ target: { checked: !o.selected } })}
          >
            {o.name}
          </label>
        </div>
      ))}
    </div>
  );
};

export default Radio;
