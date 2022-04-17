import React, { useContext, useState } from 'react';
import { AuthContext } from '../context';
import { Firebase } from '../services';

const Dashboard = () => {
  const [loading, setLoading] = useState(false);
  const { session } = useContext(AuthContext);

  return (
    <div className='flex justify-center content-center align-middle w-full h-screen bg-slate-200'>
      <div className='flex flex-col w-full md:w-8/12 h-screen md:h-fit mx-auto overflow-hidden mt-10'>
        <h2 className='text-3xl font-semibold text-center text-gray-800 dark:text-white'>Quiz Builder</h2>

        <div className='flex flex-col items-center mt-6 -mx-2'>
          <img
            className='object-cover w-24 h-24 mx-2 rounded-full'
            src='https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
            alt='avatar'
          />
          <h4 className='mx-2 mt-2 font-medium text-gray-800 dark:text-gray-200 hover:underline'>
            {session?.email}</h4>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
