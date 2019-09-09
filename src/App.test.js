import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16'

import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter() })

/**
 * Factory function to create a ShallowWrapper for the App appComponent
 * @function setup
 * @param {object} props - Component props specific to this setup
 * @param {any} state - Initial state for setup
 * @returns {ShallowWrapper}
*/
const setup = (props={}, state=null) => {
  return shallow(<App {...props} />)
}

/**
 * Return ShallowWrapper containing node(s) with the given data-test at value.
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to search within
 * @param {string} val - Value of data-test attribute for search
 * @returns {ShallowWrapper}
 */
const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`)
}

test('render without error', () => {
  const wrapper = setup()
  const appComponent = findByTestAttr(wrapper, 'swapi');
  expect (appComponent.length).toBe(1)
})
