import React, { useCallback } from 'react';
import CloseButton from './CloseButton';
import Button from './Button';

const LIMIT = 5;

const Checkbox = ({ onChange, onQuestionNameChange, onQuestionDelete, name, options = [], editable }) => {
  const onSelect = useCallback(
    (i) => (e) => {
      let nOptions = [...options];
      nOptions[i].selected = e.target.checked;
      onChange(nOptions);
    },
    [options, onChange],
  );

  const onChangeName = useCallback(
    (i) => (e) => {
      let nOptions = [...options].map((o, ii) => (ii === i ? { ...o, name: e.target.value } : o));
      onChange(nOptions);
    },
    [options, onChange],
  );

  const onDelete = useCallback(
    (i) => (e) => {
      let nOptions = [...options].filter((o, ii) => ii !== i);
      onChange(nOptions);
    },
    [options, onChange],
  );

  return (
    <div className={`mt-4 ${editable ? 'bg-slate-100 rounded-lg p-4' : ''}`}>
      {editable ? (
        <div className='flex flex-row flex-1'>
          <input
            onChange={(e) => onQuestionNameChange(e.target.value)}
            value={name}
            className='flex-1 block text-sm font-medium text-gray-600 bg-slate-100 dark:text-gray-300 border-b-2 border-transparent appearance-none focus:outline-none focus:ring-0 focus:border-blue-400 peer'
          />
        </div>
      ) : (
        <label className='block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200' htmlFor={name}>
          {name}
        </label>
      )}
      {options.map((o, i) => (
        <div class='flex items-center mt-4'>
          <input
            key={i}
            type='checkbox'
            class='w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 cursor-pointer'
            checked={o.selected}
            onChange={onSelect(i)}
          />
          {editable ? (
            <div className='flex flex-row flex-1'>
              <input
                key={i}
                onChange={onChangeName(i)}
                value={o.name}
                className='flex-1 block ml-2 text-sm text-gray-900 bg-slate-100 dark:text-gray-300 border-b-2 border-transparent appearance-none focus:outline-none focus:ring-0 focus:border-blue-400 peer'
              />
              <CloseButton onClick={onDelete(i)} />
            </div>
          ) : (
            <label
              class='ml-3 text-sm text-gray-900 dark:text-gray-300 cursor-pointer'
              onClick={() => onSelect(i)({ target: { checked: !o.selected } })}
            >
              {o.name}
            </label>
          )}
        </div>
      ))}
      {editable && (
        <div className='mt-6 flex'>
          <Button
            className='w-24 text-xs bg-red-700 hover:bg-red-600 focus:bg-red-600'
            text='Delete'
            onClick={onQuestionDelete}
          />
          <div className='flex flex-1 flex-row-reverse'>
            <Button
              className='w-24 text-xs'
              text='Add'
              onClick={() =>
                options.length < LIMIT ? onChange([...options, { name: `Option ${options.length + 1}` }]) : null
              }
            />
            <p className='mt-2 mr-2 text-xs'>{`${options.length}/${LIMIT} answers`}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkbox;
