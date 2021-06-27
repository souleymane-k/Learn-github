import React from 'react';
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import NoteProduct from './NoteProduct';

describe.skip(`NoteProduct component`, () => {
  it('renders the complete form', () => {
    const wrapper = shallow(<NoteProduct />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<NoteProduct />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})