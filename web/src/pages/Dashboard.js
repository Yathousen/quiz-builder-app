import React, { useContext, useState, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Breadcrumbs, Button, QuizItem, Skeleton } from '../components';
import { AuthContext } from '../context';
import { Firebase } from '../services';
import { docsToArray } from '../utils';

const Dashboard = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [quizzes, setQuizzes] = useState([]);
  const { session } = useContext(AuthContext);

  const logout = useCallback(async () => {
    if (window.confirm('Are you use you want to logout?')) {
      await Firebase.auth().signOut();
    }
  }, []);

  useEffect(() => {
    let subscription;
    if (session?.uid) {
      setLoading(true);
      subscription = Firebase.firestore()
        .collection('private')
        .doc(session.uid)
        .collection('quizzes')
        .onSnapshot((snapshots) => {
          setQuizzes(docsToArray(snapshots).sort((a, b) => b.createdAt-a.createdAt));
          setLoading(false);
        });
    }
    return () => subscription && subscription();
  }, [session?.uid]);

  return (
    <div className='flex justify-center content-center align-middle w-full min-h-screen pb-8 bg-slate-200'>
      <div className='flex flex-col w-full md:w-8/12 min-h-screen pb-8 md:h-fit mx-auto overflow-hidden mt-10'>
        <Breadcrumbs />
        <div className='flex flex-col w-full md:w-8/12 mx-auto overflow-hidden bg-white rounded-lg shadow-sm mt-6 content-center justify-center p-8'>
          <h2 className='text-3xl font-semibold text-center text-gray-800 dark:text-white'>Quiz Builder</h2>
          <span className='text-sm text-slate-600 text-center'>by Yamil Garcia Hernandez</span>
        </div>

        <div className='mt-6 md:w-8/12 mx-auto'>
          <h3 className='text-1xl font-bold text-slate-500'>Profile</h3>
        </div>
        <div className='flex w-full md:w-8/12 mx-auto overflow-hidden bg-white rounded-lg shadow-sm mt-6 content-center justify-center p-8'>
          <div className='flex flex-col items-center -mx-2'>
            <img
              className='object-cover w-24 h-24 mx-2 rounded-full'
              src='https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
              alt='avatar'
            />
            <h4 className='mx-2 mt-2 font-medium text-gray-800 dark:text-gray-200 hover:underline'>{session?.email}</h4>
            <div className='w-30 text-sm mt-2'>
              <Button text='Logout' onClick={logout} />
            </div>
          </div>
        </div>
        <div className='mt-6 md:w-8/12 mx-auto flex justify-between'>
          <h3 className='mt-2 text-1xl font-bold text-slate-500'>Your Quizzes</h3>
          <Button className='w-28 text-sm' text='Create Quiz' onClick={() => navigate('/edit')} />
        </div>
        <div className='mt-6 md:w-8/12 mx-auto'>
          {loading ? <Skeleton /> : quizzes.map(q => <QuizItem data={q}/>)}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
