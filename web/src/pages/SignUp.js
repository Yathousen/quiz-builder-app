import React, { useCallback, useMemo, useState } from 'react';
import md5 from 'md5';
import QuizImg from '../assets/quiz.jpg';
import { Firebase } from '../services';
import { Alert } from '../components';

const SignUp = () => {
  const [showError, setShowError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');

  const register = useCallback(async () => {
    setLoading(true);
    setShowError(false);
    try {
      await Firebase.auth().createUserWithEmailAndPassword(email, password);
      await Firebase.auth().currentUser.updateProfile({ photoURL: `https://gravatar.com/avatar/${md5(email)}?s=400&d=identicon&r=x` });
    } catch (ex) {
      setShowError(true);
    }
    setLoading(false);
  }, [email, password]);

  const invalidEmail = useMemo(
    () => email && !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email),
    [email],
  );
  const invalidPassword = useMemo(
    () => password && !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/.test(password),
    [password],
  );
  const invalidPasswordRepeat = useMemo(
    () => password && passwordRepeat && password !== passwordRepeat,
    [password, passwordRepeat],
  );

  const error = useMemo(() => {
    if (invalidEmail) {
      return { show: true, text: 'Invalid Email' };
    }
    if (invalidPassword) {
      return { show: true, text: 'Password must have at least 1 lowercase letter, 1 uppercase letter, 1 number and 1 symbol (!@#$%^&*) and be at least 8 characters long' };
    }
    if (invalidPasswordRepeat) {
      return { show: true, text: "Passwords don't match" };
    }
    if (showError) {
      return { show: true, text: 'Email already in use' };
    }
    return { show: false, text: '' };
  }, [showError, invalidEmail, invalidPassword, invalidPasswordRepeat]);

  return (
    <div className='flex justify-center content-center align-middle items-center w-full min-h-screen pb-8 bg-slate-200'>
      <div className='flex w-11/12 md:w-8/12 md:h-fit mx-auto overflow-hidden bg-white rounded-lg shadow-lg'>
        <div
          className='hidden bg-center lg:block lg:w-1/2'
          style={{
            backgroundImage: `url('${QuizImg}')`,
          }}
        ></div>

        <div className='w-full px-6 py-8 md:px-8 lg:w-1/2'>
          <h2 className='text-2xl font-semibold text-center text-gray-700 dark:text-white'>Quiz Builder</h2>
          <p className='text-sm text-slate-600 text-center mb-2'>by Yamil Garcia Hernandez</p>

          <p className='text-xl text-center text-gray-600 dark:text-gray-200'>Welcome back!</p>
          <Alert show={error.show} text={error.text} error />
          <div className='mt-4'>
            <label className='block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200' htmlFor='email'>
              Email Address
            </label>
            <input
              id='email'
              onChange={({ target: { value } }) => setEmail(value)}
              className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300'
              type='email'
            />
          </div>

          <div className='mt-4'>
            <div className='flex justify-between'>
              <label className='block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200' htmlFor='password'>
                Password
              </label>
            </div>

            <input
              id='password'
              onChange={({ target: { value } }) => setPassword(value)}
              className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300'
              type='password'
            />
          </div>

          <div className='mt-4'>
            <div className='flex justify-between'>
              <label
                className='block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200'
                htmlFor='passwordRepeat'
              >
                Repeat Password
              </label>
            </div>

            <input
              id='passwordRepeat'
              onChange={({ target: { value } }) => setPasswordRepeat(value)}
              className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300'
              type='password'
            />
          </div>

          <div className='mt-8'>
            <button
              onClick={register}
              disabled={loading || !email || !password || invalidEmail || invalidPassword || invalidPasswordRepeat}
              className='disabled:bg-gray-500 w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-700 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600'
            >
              Sign Up
            </button>
          </div>

          <div className='flex items-center justify-between mt-4'>
            <span className='w-1/5 border-b dark:border-gray-600 md:w-1/4'></span>

            <a href='/login' className='text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline'>
              or login
            </a>

            <span className='w-1/5 border-b dark:border-gray-600 md:w-1/4'></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
