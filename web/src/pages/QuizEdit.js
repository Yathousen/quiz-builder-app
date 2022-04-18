import React, { useContext, useState } from 'react';
import { Button, Skeleton } from '../components';
import { AuthContext } from '../context';
import { Firebase } from '../services';

const QuizEdit = () => {
  const [loading, setLoading] = useState(false);
  const { session } = useContext(AuthContext);

  return (
    <div className='flex justify-center content-center align-middle w-full h-screen bg-slate-200'>
      <div className='flex flex-col w-full md:w-8/12 h-screen md:h-fit mx-auto overflow-hidden mt-10'>
        <div className='flex flex-col w-full md:w-8/12 mx-auto overflow-hidden bg-white rounded-lg shadow-sm mt-6 content-center justify-center p-8'>
          <h2 className='text-3xl font-semibold text-center text-gray-800 dark:text-white'>Quiz Builder</h2>
          <span className='text-sm text-slate-600 text-center'>by Yamil Garcia Hernandez</span>
        </div>

        
        <div className='mt-6 md:w-8/12 mx-auto'>
          <h3 className="text-1xl font-bold text-slate-500">Your Quizzes</h3>
        </div>
        <div className='mt-6 md:w-8/12 mx-auto'>
        <Skeleton/>
        </div>
      </div>
    </div>
  );
};

export default QuizEdit;
