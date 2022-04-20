import React from 'react';
import renderer from 'react-test-renderer';
import { Question } from '../';

it('Radio Question', () => {
  expect(
    renderer
      .create(
        <Question
          name='Question 1'
          data={{
            number: 1,
            name: 'Question 1',
            options: [
              { name: 'Answer 1', selected: true },
              { name: 'Answer 2', selected: false },
            ],
            types: [
              { name: 'Single correct answer', selected: true },
              { name: 'Select all correct answers', selected: false },
            ],
          }}
        />,
      )
      .toJSON(),
  ).toMatchSnapshot();
});

it('Checkbox Question', () => {
  expect(
    renderer
      .create(
        <Question
          name='Question 1'
          data={{
            number: 1,
            name: 'Question 1',
            options: [
              { name: 'Answer 1', selected: true },
              { name: 'Answer 2', selected: false },
            ],
            types: [
              { name: 'Single correct answer', selected: false },
              { name: 'Select all correct answers', selected: true },
            ],
          }}
        />,
      )
      .toJSON(),
  ).toMatchSnapshot();
});

it('Editable Question', () => {
  expect(
    renderer
      .create(
        <Question
          name='Question 1'
          data={{
            number: 1,
            name: 'Question 1',
            options: [
              { name: 'Answer 1', selected: true },
              { name: 'Answer 2', selected: false },
            ],
            types: [
              { name: 'Single correct answer', selected: true },
              { name: 'Select all correct answers', selected: false },
            ],
          }}
          editable
        />,
      )
      .toJSON(),
  ).toMatchSnapshot();
});

it('Disabled Question', () => {
  expect(
    renderer
      .create(
        <Question
          name='Question 1'
          data={{
            number: 1,
            name: 'Question 1',
            options: [
              { name: 'Answer 1', selected: true },
              { name: 'Answer 2', selected: false },
            ],
            types: [
              { name: 'Single correct answer', selected: true },
              { name: 'Select all correct answers', selected: false },
            ],
          }}
          disabled
        />,
      )
      .toJSON(),
  ).toMatchSnapshot();
});
