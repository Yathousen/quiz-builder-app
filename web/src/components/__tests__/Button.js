import React from 'react';
import renderer from 'react-test-renderer';
import { Button } from '../';

it('Button', () => {
  expect(renderer.create(<Button text='Click' />).toJSON()).toMatchSnapshot();
});

it('Loading Button', () => {
  expect(renderer.create(<Button text='Click' loading />).toJSON()).toMatchSnapshot();
});

it('Disabled Button', () => {
  expect(renderer.create(<Button text='Click' disabled />).toJSON()).toMatchSnapshot();
});

it('Custom Button', () => {
  expect(
    renderer.create(<Button text='Click' className='bg-green-600 hover:bg-green-600 focus:bg-green-600' />).toJSON(),
  ).toMatchSnapshot();
});
