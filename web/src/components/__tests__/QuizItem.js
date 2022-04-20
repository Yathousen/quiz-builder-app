import React from 'react';
import renderer from 'react-test-renderer';
import { QuizItem } from '../';
const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

it('QuizItem', () => {
  expect(
    renderer
      .create(
        <QuizItem
          data={{
            id: 1,
            key: '',
            name: 'Test 1',
            published: false,
            createdAt: { toDate: () => new Date('2022-04-20') },
            questions: [
              {
                name: 'Question Title',
                types: [
                  { name: 'Single correct answer', selected: true },
                  { name: 'Select all correct answers', selected: false },
                ],
                options: [
                  { name: 'Answer 1', selected: true },
                  { name: 'Answer 2', selected: false },
                ],
              },
            ],
          }}
        />,
      )
      .toJSON(),
  ).toMatchSnapshot();
});

it('QuizItem Published', () => {
  expect(
    renderer
      .create(
        <QuizItem
          data={{
            id: 1,
            key: '',
            name: 'Test 1',
            published: true,
            createdAt: { toDate: () => new Date('2022-04-20') },
            questions: [
              {
                name: 'Question Title',
                types: [
                  { name: 'Single correct answer', selected: true },
                  { name: 'Select all correct answers', selected: false },
                ],
                options: [
                  { name: 'Answer 1', selected: true },
                  { name: 'Answer 2', selected: false },
                ],
              },
            ],
          }}
        />,
      )
      .toJSON(),
  ).toMatchSnapshot();
});
