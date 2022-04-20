import React from 'react';
import renderer from 'react-test-renderer';
import { Input } from '../';

it('Input', () => {
  expect(renderer.create(<Input name='Test Name' value='Test Value' />).toJSON()).toMatchSnapshot();
});

it('Disabled Input', () => {
  expect(renderer.create(<Input name='Test Name' value='Test Value' disabled />).toJSON()).toMatchSnapshot();
});
