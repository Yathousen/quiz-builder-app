import { generateKey, docsToArray } from './utils';

it('Generate Key', () => {
  expect(generateKey(6).length).toEqual(6);
});

it('Docs to Array', () => {
  expect(docsToArray([{ id: 1, data: () => ({ name: test }) }])).toEqual([{ id: 1, name: test }]);
});
