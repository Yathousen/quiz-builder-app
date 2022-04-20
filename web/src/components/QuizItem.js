import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

const QuizItem = ({ data: { id, name, published, questions, createdAt, key } }) => {
  const navigate = useNavigate();

  const date = useMemo(
    () =>
      createdAt.toDate().toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
      }),
    [createdAt],
  );

  return (
    <div className='mt-4 px-4 py-4 mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800'>
      <div className='flex items-center justify-between'>
        <a
          onClick={() => navigate(`/edit/${id}`)}
          className='text-2xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline cursor-pointer'
        >
          {name}
        </a>
        {published && (
          <a
            onClick={() => navigate(`/take/${key}`)}
            className='px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-200 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500'
          >
            Published
          </a>
        )}
      </div>

      <div className='mt-2'>
        <p className='mt-2 text-gray-600 dark:text-gray-300'>
          {`${questions.length} question${questions.length > 1 ? 's' : ''}`}
        </p>
      </div>

      <span className='text-sm font-light text-gray-600 dark:text-gray-400'>{date}</span>
    </div>
  );
};

export default QuizItem;
