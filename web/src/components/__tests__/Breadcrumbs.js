import React from 'react';
import renderer from 'react-test-renderer';
import { Breadcrumbs } from '../';

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

it('Default Breadcrumbs', () => {
  expect(renderer.create(<Breadcrumbs />).toJSON()).toMatchSnapshot();
});

it('Extended Breadcrumbs', () => {
  expect(renderer.create(<Breadcrumbs data={[{ name: 'Extended' }]} />).toJSON()).toMatchSnapshot();
});
