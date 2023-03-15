import React from 'react';
import { render } from '@testing-library/react-native';

import App from '../App';

describe('App test', () => {
  test('should match snapshot', () => {
    let app = render(<App/>);
    expect(app.toJSON()).toMatchSnapshot();
  });
});
