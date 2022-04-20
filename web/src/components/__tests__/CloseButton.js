import React from 'react';
import renderer from 'react-test-renderer';
import { CloseButton } from '../';

it('Close Button', () => {
  expect(renderer.create(<CloseButton />).toJSON()).toMatchSnapshot();
});

it('Disabled Close Button', () => {
  expect(renderer.create(<CloseButton disabled />).toJSON()).toMatchSnapshot();
});
