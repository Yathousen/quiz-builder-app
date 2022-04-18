import React, { useCallback, useContext, useState } from 'react';
import { Button, Checkbox, Input, Question, Radio, Skeleton, Toggle } from '../components';
import { AuthContext } from '../context';
import { Firebase } from '../services';

const MINIMUM = 1;
const LIMIT = 10;

const DEFAULT_QUESTION = {
  name: 'Question Title',
  types: [
    { name: 'Single correct answer', selected: true },
    { name: 'Select all correct answers', selected: false },
  ],
  options: [
    { name: 'Answer 1', selected: true },
    { name: 'Answer 2', selected: false },
  ],
};

const QuizEdit = ({ id }) => {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('');
  const [types, setTypes] = useState([{ name: 'Single correct answer' }, { name: 'Select all correct answers' }]);
  const [publish, setPublish] = useState(false);
  const [questions, setQuestions] = useState([DEFAULT_QUESTION]);
  const onQuestionChange = useCallback(
    (i) => (data) => {
      let nQuestions = [...questions];
      nQuestions[i] = {
        ...nQuestions[i],
        ...data,
        ...(data.types
          ? {
              options: nQuestions[i].options.map((o, i) =>
                i === 0 ? { ...o, selected: true } : { ...o, selected: false },
              ),
            }
          : {}),
      };
      setQuestions(nQuestions);
    },
    [questions],
  );
  const onQuestionDelete = useCallback(
    (i) => () => questions.length > MINIMUM ? setQuestions(questions.filter((q, ii) => i !== ii)) : null,
    [questions],
  );

  const { session } = useContext(AuthContext);

  return (
    <div className='flex justify-center content-center align-middle w-full min-min-h-screen pb-8 pb-8 bg-slate-200'>
      <div className='flex flex-col w-full md:w-8/12 min-h-screen pb-8 md:h-fit mx-auto overflow-hidden mt-10'>
        <div className='flex flex-col w-full md:w-8/12 mx-auto overflow-hidden bg-white rounded-lg shadow-sm mt-6 content-center justify-center p-8'>
          <h2 className='text-3xl font-semibold text-center text-gray-800 dark:text-white'>Quiz Builder</h2>
          <span className='text-sm text-slate-600 text-center'>by Yamil Garcia Hernandez</span>
        </div>

        <div className='mt-6 md:w-8/12 mx-auto'>
          <h3 className='text-1xl font-bold text-slate-500'>{`${id ? 'Edit' : 'Create new '} quiz`}</h3>
        </div>
        <div className='flex flex-col w-full md:w-8/12 mx-auto overflow-hidden bg-white rounded-lg shadow-sm mt-6 content-center justify-center p-8'>
          <Input name='Name' onChange={setName} value={name} />
          <Toggle name='Publish' value={publish} onChange={setPublish} />

          <div className='flex mt-4 justify-between'>
            <label className='mt-2 text-sm font-medium text-gray-600 dark:text-gray-200' htmlFor={name}>
              Questions ({questions.length}/{LIMIT})
            </label>
            <div className=''>
              <Button
                className=' text-sm'
                text='Add Question'
                onClick={() => (questions.length < LIMIT ? setQuestions([...questions, DEFAULT_QUESTION]) : null)}
              />
            </div>
          </div>

          {questions.map((q, i) => (
            <Question
              data={{ ...q, number: i + 1 }}
              onChange={onQuestionChange(i)}
              onDelete={onQuestionDelete(i)}
              editable
            />
          ))}
          <div className='mt-6 flex flex-row-reverse'>
            <Button className='w-24 bg-green-600 hover:bg-green-600 focus:bg-green-600' text='Save' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizEdit;
