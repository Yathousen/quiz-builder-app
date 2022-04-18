import React, { useCallback } from 'react';

const Checkbox = ({ onChange, name, options = [], disabled, ...rest }) => {
  const onSelect = useCallback(
    (i) => (e) => {
      let nOptions = [...options];
      nOptions[i].selected = e.target.checked;
      onChange(nOptions);
    },
    [options, onChange],
  );

  return (
    <div className='mt-4'>
      <label className='block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200' htmlFor={name}>
        {name}
      </label>
      {options.map((o, i) => (
        <div class='flex items-center mt-4'>
          <input
            key={i}
            type='checkbox'
            class='w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
            checked={o.selected}
            onChange={onSelect(i)}
          />
          <label
            class='ml-3 text-sm font-medium text-gray-900 dark:text-gray-300'
            onClick={() => onSelect(i)({ target: { checked: !o.selected } })}
          >
            {o.name}
          </label>
        </div>
      ))}
    </div>
  );
};

export default Checkbox;
