import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Breadcrumbs, Button, Question, Skeleton } from '../components';
import { Firebase } from '../services';

const QuizEdit = () => {
  const navigate = useNavigate();
  const { key } = useParams();
  const [loading, setLoading] = useState(true);
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [questions, setQuestions] = useState([]);
  const [userQuestions, setUserQuestions] = useState([]);
  const onQuestionChange = useCallback(
    (i) => (data) => {
      let nQuestions = [...userQuestions];
      nQuestions[i] = {
        ...nQuestions[i],
        ...data,
      };
      setUserQuestions(nQuestions);
    },
    [userQuestions],
  );

  const error = useMemo(() => {
    if (
      userQuestions.map((q) => q.options.filter((q) => q.selected).length >= 1).filter((valid) => valid).length !==
      userQuestions.length
    ) {
      return 'Answer all questions';
    }
    return;
  }, [userQuestions]);

  const result = useMemo(
    () =>
      userQuestions
        .map((q, i) => {
          const answers = q.options.reduce((r, o, i) => (o.selected ? [...r, i] : r), []);
          const expectedAnswers = questions[i].options.reduce((r, o, i) => (o.selected ? [...r, i] : r), []);
          return JSON.stringify(answers) === JSON.stringify(expectedAnswers);
        })
        .filter((correct) => correct).length,
    [questions, userQuestions],
  );

  useEffect(() => {
    if (key) {
      setLoading(true);
      Firebase.firestore()
        .collection('public')
        .doc(key)
        .get()
        .then((doc) => doc.data())
        .then((quiz) => {
          setName(quiz.name);
          setQuestions(quiz.questions);
          setUserQuestions(
            quiz.questions.map((q) => ({ ...q, options: q.options.map((o) => ({ ...o, selected: false })) })),
          );
          setLoading(false);
        })
        .catch((ex) => navigate('/dashboard'));
    } else {
      setLoading(false);
    }
  }, [key, navigate]);

  return (
    <div className='flex justify-center content-center align-middle w-full min-min-h-screen pb-8 pb-8 bg-slate-200'>
      <div className='flex flex-col w-full md:w-8/12 min-h-screen pb-8 md:h-fit mx-auto overflow-hidden mt-10'>
        <Breadcrumbs data={[{ name: 'Take Quiz' }]} />
        <div className='flex flex-col w-11/12 md:w-8/12 mx-auto overflow-hidden bg-white rounded-lg shadow-sm mt-6 content-center justify-center p-8'>
          <h2 className='text-3xl font-semibold text-center text-gray-800 dark:text-white'>Quiz Builder</h2>
          <span className='text-sm text-slate-600 text-center'>by Yamil Garcia Hernandez</span>
        </div>

        <div className='mt-6 w-11/12 md:w-8/12 mx-auto'>
          <h3 className='text-1xl font-bold text-slate-500'>Take Quiz</h3>
        </div>
        {loading && (
          <div className='flex flex-col w-11/12 md:w-8/12 mx-auto overflow-hidden bg-white rounded-lg shadow-sm mt-6 content-center justify-center p-8'>
            <Skeleton />
          </div>
        )}
        {!loading && (
          <>
            <div className='flex flex-col w-11/12 md:w-8/12 mx-auto overflow-hidden bg-white rounded-lg shadow-sm mt-6 content-center justify-center p-8'>
              <label className='text-md font-medium text-gray-600 dark:text-gray-200' htmlFor={name}>
                {name}
              </label>
              <p className='mt-2 font-semibold text-slate-400'>Permalink: <a className='text-sm font-normal underline text-blue-400'>{window.location.href}</a></p>
            </div>
            <div className='flex flex-col w-11/12 md:w-8/12 mx-auto overflow-hidden bg-white rounded-lg shadow-sm mt-6 content-center justify-center p-8'>
              {submitted ? (
                <p className='py-20 text-2xl font-bold text-center text-slate-400'>{`You answered ${result}/${
                  questions.length
                } question${questions.length > 1 ? 's' : ''} correctly`}</p>
              ) : (
                <>
                  <div className='flex justify-between'>
                    <label className='mt-2 text-sm font-medium text-gray-600 dark:text-gray-200' htmlFor={name}>
                      Questions
                    </label>
                  </div>

                  {userQuestions.map((q, i) => (
                    <Question data={{ ...q, number: i + 1 }} onChange={onQuestionChange(i)} />
                  ))}
                  <div className='mt-6 flex justify-between'>
                    <p className='mt-3 font-medium text-red-400'>{error}</p>
                    <Button className='w-24' text='Submit' disabled={error} onClick={() => setSubmitted(true)} />
                  </div>
                </>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default QuizEdit;
