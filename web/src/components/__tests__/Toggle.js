import React from 'react';
import renderer from 'react-test-renderer';
import { Toggle } from '../';

it('Toggle Inactive', () => {
  expect(renderer.create(<Toggle name='Test Name' value={false} />).toJSON()).toMatchSnapshot();
});

it('Toggle Active', () => {
  expect(renderer.create(<Toggle name='Test Name' value={true} />).toJSON()).toMatchSnapshot();
});

it('Disabled Toggle', () => {
  expect(
    renderer.create(<Toggle name='Test Name' value={true} disabled />).toJSON(),
  ).toMatchSnapshot();
});
