import React from 'react';
import renderer from 'react-test-renderer';
import { Skeleton } from '../';

it('Skeleton', () => {
  expect(renderer.create(<Skeleton />).toJSON()).toMatchSnapshot();
});
