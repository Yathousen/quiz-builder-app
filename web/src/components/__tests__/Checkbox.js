import React from 'react';
import renderer from 'react-test-renderer';
import { Checkbox } from '../';

it('Checkbox', () => {
  expect(
    renderer
      .create(
        <Checkbox
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

it('Editable Checkbox', () => {
  expect(
    renderer
      .create(
        <Checkbox
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

it('Disabled Checkbox', () => {
  expect(
    renderer
      .create(
        <Checkbox
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
