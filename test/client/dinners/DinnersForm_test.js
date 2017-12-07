/* global describe, it */
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import DinnersForm from '../../../src/components/dinners/DinnersForm';

describe('DinnersForm tests', () => {
  it('should render five input fields and one select', done => {
    const props = {
      dinner: {
        title: '',
        image: '',
        formatted_address: '',
        avail_places: '',
        description: ''
      },
      errors: {}
    };

    const wrapper = shallow(<DinnersForm {...props} />);
    expect(wrapper.find('input').length).to.equal(6);
    expect(wrapper.find('button').length).to.equal(1);
    done();
  });

  it('should populate the form', done => {
    const props = {
      dinner: {
        title: 'title',
        image: 'image',
        formatted_address: 'formatted_address',
        avail_places: 'avail_places',
        description: 'description'
      },
      errors: {}
    };

    const wrapper = shallow(<DinnersForm {...props} />);
    expect(wrapper.find({ value: 'title' }).length).to.equal(1);
    expect(wrapper.find({ value: 'image' }).length).to.equal(1);
    expect(wrapper.find({ value: 'formatted_address' }).length).to.equal(1);
    expect(wrapper.find({ value: 'avail_places' }).length).to.equal(1);
    expect(wrapper.find({ value: 'description' }).length).to.equal(1);
    done();
  });

});
