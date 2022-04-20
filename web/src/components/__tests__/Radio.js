import React from 'react';
import renderer from 'react-test-renderer';
import { Radio } from '../';

it('Radio', () => {
  expect(
    renderer
      .create(
        <Radio
          name='Question 1'
          options={[
            { name: 'Answer 1', selected: true },
            { name: 'Answer 2', selected: false },
          ]}
        />,
      )
      .toJSON(),
  ).toMatchSnapshot();
});

it('Editable Radio', () => {
  expect(
    renderer
      .create(
        <Radio
          name='Question 1'
          options={[
            { name: 'Answer 1', selected: true },
            { name: 'Answer 2', selected: false },
          ]}
          editable
        />,
      )
      .toJSON(),
  ).toMatchSnapshot();
});

it('Disabled Radio', () => {
  expect(
    renderer
      .create(
        <Radio
          name='Question 1'
          options={[
            { name: 'Answer 1', selected: true },
            { name: 'Answer 2', selected: false },
          ]}
          disabled
        />,
      )
      .toJSON(),
  ).toMatchSnapshot();
});
