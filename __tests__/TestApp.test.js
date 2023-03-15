import React, {useRef} from 'react';
import { render } from '@testing-library/react-native';
import MyApp from '../app/components/TestApp';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import { act } from 'react-test-renderer';

configure({adapter: new Adapter()});

describe('App test', () => {
  it('fn1 test', () => {
    
    let ref;
    const UsesRef = () => {
      ref = useRef();
      return <MyApp ref={ref} />
    };

    const wrapper = render(<UsesRef />);
    act(() => {
      ref.current.fn1();
    });
  })
});