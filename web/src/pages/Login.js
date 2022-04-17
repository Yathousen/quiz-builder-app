import React, { useCallback, useState } from 'react';
import QuizImg from '../assets/quiz.jpg';
import { Firebase } from '../services';
import { Alert } from '../components';

const Login = () => {
  const [showError, setShowError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = useCallback(async () => {
    setLoading(true);
    setShowError(false);
    try {
      await Firebase.signInWithEmailAndPassword(
        Firebase.Auth(),
        email,
        password,
      );
    } catch (ex) {
        setShowError(true);
    }
    setLoading(false);
  }, [email, password]);

  return (
    <div className='flex justify-center content-center align-middle items-center w-full h-screen bg-slate-200'>
      <div className='flex w-full md:w-8/12 h-screen md:h-fit mx-auto overflow-hidden bg-white rounded-lg shadow-lg'>
        <div
          className='hidden bg-center lg:block lg:w-1/2'
          style={{
            backgroundImage: `url('${QuizImg}')`,
          }}
        ></div>

        <div className='w-full px-6 py-8 md:px-8 lg:w-1/2'>
          <h2 className='text-2xl font-semibold text-center text-gray-700 dark:text-white'>Quiz Builder</h2>

          <p className='text-xl text-center text-gray-600 dark:text-gray-200'>Welcome back!</p>
          <Alert show={showError} text='email/password incorrect' onClose={() => setShowError(false)} error />
          <div className='mt-4'>
            <label
              className='block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200'
              htmlFor='email'
            >
              Email Address
            </label>
            <input
              id='email'
              onChange={({ target: { value }}) => setEmail(value)}
              className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300'
              type='email'
            />
          </div>

          <div className='mt-4'>
            <div className='flex justify-between'>
              <label
                className='block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200'
                htmlFor='password'
              >
                Password
              </label>
            </div>

            <input
              id='password'
              onChange={({ target: { value }}) => setPassword(value)}
              className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300'
              type='password'
            />
          </div>

          <div className='mt-8'>
            <button onClick={login} disabled={loading || !email || !password} className='disabled:bg-gray-500 w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-700 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600'>
              Login
            </button>
          </div>

          <div className='flex items-center justify-between mt-4'>
            <span className='w-1/5 border-b dark:border-gray-600 md:w-1/4'></span>

            <a href='/signup' className='text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline'>
              or sign up
            </a>

            <span className='w-1/5 border-b dark:border-gray-600 md:w-1/4'></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
