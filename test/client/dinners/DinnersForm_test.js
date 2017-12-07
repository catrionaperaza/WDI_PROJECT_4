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
    expect(wrapper.find('input').length).to.equal(5);
    expect(wrapper.find('select').length).to.equal(1);
    done();
  });

  it('should populate the form', done => {
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
    expect(wrapper.find({ value: 'title' }).length).to.equal(1);
    expect(wrapper.find({ value: 'image' }).length).to.equal(1);
    expect(wrapper.find({ value: 'formatted_address' }).length).to.equal(1);
    expect(wrapper.find({ value: 'avail_places' }).length).to.equal(1);
    expect(wrapper.find({ value: 'description' }).length).to.equal(1);
    done();
  });

  it('should correctly display errors', done => {
    const props = {
      dinner: {
        title: '',
        image: '',
        formatted_address: '',
        avail_places: '',
        description: ''
      },
      errors: {
        title: 'Title is required',
        image: 'Image is required',
        formatted_address: 'formatted_address is required',
        avail_places: 'avail_places is required',
        description: 'description is required'
      }
    };

    const wrapper = shallow(<DinnersForm {...props} />);
    expect(wrapper.find('div.form-group.has-error').length).to.equal(3);
    expect(wrapper.find('small.has-error').length).to.equal(3);
    done();
  });

});
