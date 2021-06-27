import React from 'react';
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Product from './Products/product ';

describe(`Product  component`, () => {
  it('renders the complete form', () => {
    const wrapper = shallow(<Product  />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Product  />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})
