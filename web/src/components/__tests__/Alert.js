import React from 'react';
import renderer from 'react-test-renderer';
import { Alert } from '../';

it('Alert Shows', () => {
    expect(renderer
      .create(<Alert show={true} text='Alert' />)
      .toJSON()).toMatchSnapshot();
});

it("Alert Doesn't show", () => {
  expect(renderer
    .create(<Alert show={false} text='Alert' />)
    .toJSON()).toMatchSnapshot();
});
