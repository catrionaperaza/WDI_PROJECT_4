/* global describe, it, beforeEach, before, after */
import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import sinon from 'sinon';
import Promise from 'bluebird';
import Axios from 'axios';
import { MemoryRouter } from 'react-router-dom';
import DinnersIndex from '../../../src/components/dinners/DinnersIndex';

const dinnerData = [{
  id: 1,
  title: 'My lovely dinner',
  image: 'dinner.jpg',
  formatted_address: '12 Hogside Road',
  avail_places: '4',
  description: 'It will be really nice'
}, {
  id: 2,
  title: 'Yummy dinner',
  image: 'dinner2.jpg',
  formatted_address: '56 jingle bell block',
  avail_places: '5',
  description: 'It will be delicious'
}];

describe('DinnersIndex tests', () => {
  let wrapper = null;
  let promise = null;

  before(done => {
    promise = Promise.resolve({ data: dinnerData });
    sinon.stub(Axios, 'get').returns(promise);
    done();
  });

  after(done => {
    Axios.get.restore();
    done();
  });

  beforeEach(done => {
    wrapper = mount(
      <MemoryRouter>
        <DinnersIndex />
      </MemoryRouter>
    );
    done();
  });

  it('should display dinner items', done => {
    promise.then(() => {
      wrapper.update();
      expect(wrapper.find('div.image-tile').length).to.eq(2);
      done();
    });
  });

  it('should display links to show pages', done => {
    promise.then(() => {
      wrapper.update();
      expect(wrapper.find('div.image-tile a').length).to.eq(2);
      expect(wrapper.find({ href: '/dinners/1' }).length).to.eq(1);
      expect(wrapper.find({ href: '/dinners/2' }).length).to.eq(1);
      done();
    });
  });

  it('should display the add dinner button when logged in', done => {
    window.localStorage.setItem('token', 'FAKETOKEN');
    promise.then(() => {
      wrapper.update();
      expect(wrapper.find('a.main-button').length).to.eq(1);
      window.localStorage.removeItem('token');
      done();
    });
  });
});
