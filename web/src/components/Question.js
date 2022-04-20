import React, { useCallback, useMemo } from 'react';
import Checkbox from './Checkbox';
import CloseButton from './CloseButton';
import Radio from './Radio';

const Question = ({ data: { number, name, types, options }, onChange, onDelete, editable, disabled, help }) => {
  const type = useMemo(() => types.filter((t) => t.selected)[0].name, [types]);
  const onFieldChange = useCallback((field) => (value) => onChange({ [field]: value }), [onChange]);
  return (
    <div className={`flex flex-col mt-4 bg-slate-100 rounded-lg p-4`}>
      {editable && (
        <div className='flex flex-row justify-between mb-4'>
          <p className='text-md font-medium text-gray-600'>Question #{number}</p>
          <CloseButton onClick={onDelete} />
        </div>
      )}
      {editable && <Radio name='Type' options={types} onChange={onFieldChange('types')} />}
      {type === 'Single correct answer' && (
        <Radio
          name={name}
          options={options}
          onQuestionNameChange={onFieldChange('name')}
          onChange={onFieldChange('options')}
          editable={editable}
          disabled={disabled}
          help={help}
        />
      )}
      {type === 'Select all correct answers' && (
        <Checkbox
          name={name}
          options={options}
          onQuestionNameChange={onFieldChange('name')}
          onChange={onFieldChange('options')}
          editable={editable}
          disabled={disabled}
          help={help}
        />
      )}
    </div>
  );
};

export default Question;
