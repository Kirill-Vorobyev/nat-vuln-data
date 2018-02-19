import React from 'react';

import App from './App';
import Layout from './Components/Layout/Layout';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('<App />', ()=> {
  it('Should render Layout component', () => {
      const wrapper = shallow(<App />);
      expect(wrapper.find(Layout)).toHaveLength(1);
  });
})

