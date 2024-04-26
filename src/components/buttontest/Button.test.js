import Button from './Button'
import { shallow } from 'enzyme';
import React from 'react'

import Enzyme from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';

Enzyme.configure({ adapter: new Adapter() });

describe('Test Button component', () => {
    it('Test click event', () => {
      const mockCallBack = jest.fn();
  
      const button = shallow((<Button onClick={mockCallBack}>Ok!</Button>));
      button.find('button').simulate('click');
      expect(mockCallBack.mock.calls.length).toEqual(1);
    });
  });