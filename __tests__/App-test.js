/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

let findTextElement = (tree, element) => {
  // console.warn(tree);
  return true;
};

it('renders correctly', () => {
  renderer.create(<App />);
});

it('Find text element', () => {
  let tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});
