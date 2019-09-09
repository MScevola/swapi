import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16'

import Home from './Home';

Enzyme.configure({ adapter: new EnzymeAdapter() })

/**
* Factory function to create a ShallowWrapper for the Congrats component.
* @function setup
* @param {object} props - Component props specific to this setup.
* @returns {ShallowWrapper}
*/
const setup = (props={}) => {
    return shallow(<Home {...props} />)
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

test('renders without error', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'home');
    expect(component.length).toBe(1);
});
