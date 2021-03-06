/* eslint-env jest */
import React from 'react';
import {shallow} from 'enzyme';
import renderer from 'react-test-renderer';

import Input, {InputAddon} from '../input.react';

describe('Input', () => {
  const create = props => shallow(<Input {...props} />);

  const defaultProps = {
    size: 'medium',
    theme: 'default',
  };

  test('should render shallow component ok', () => {
    const element = renderer.create(<Input {...defaultProps} />).toJSON();
    expect(element).toMatchSnapshot();
  });

  test('should render prefixed addon content', () => {
    const element = create({
      theme: 'default',
      addonPrefix: '£',
    });
    expect(element.find(InputAddon).length).toBe(1);
  });

  test('should render suffixed addon content', () => {
    const element = create({
      theme: 'default',
      addonSuffix: '£',
    });
    expect(element.find(InputAddon).length).toBe(1);
  });
});
