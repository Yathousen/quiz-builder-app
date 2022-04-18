import React, { useContext, useState } from 'react';
import { Button, Checkbox, Input, Radio, Skeleton, Toggle } from '../components';
import { AuthContext } from '../context';
import { Firebase } from '../services';

const QuizEdit = ({ id }) => {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('');
  const [types, setTypes] = useState([{ name: 'Single correct answer' }, { name: 'Select all correct answers' }]);
  const [publish, setPublish] = useState(false);
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
          <Radio name='Type' options={types} onChange={setTypes} editable/>
          <Checkbox name='Type' options={types} onChange={setTypes}/>
          <div className='mt-6 flex flex-row-reverse'>
            <Button className='w-24' text='Save' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizEdit;
