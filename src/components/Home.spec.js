import { render } from '@testing-library/react';
import { createLocation, createMemoryHistory } from 'history';
import React from 'react';
import {Provider} from 'react-redux';
import { MemoryRouter } from 'react-router';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {Home} from './Home';

describe('Home Component', () => {
  let dispatch;
  let store;
  let props;
  let component;

  afterEach(() => jest.clearAllMocks());

  beforeEach(() => {
    const createMockStore = configureMockStore([thunk]);
    const initialState = {
      activities: { byCode: {} }
    };

    store = createMockStore(initialState);

    const history = createMemoryHistory({initialEntries: []});
    const path = '/';

    const mockMatch = {
      isExact: false,
      params: {},
      path,
      url: path
    };

    const location = createLocation(mockMatch.url, {}, 'testKey');

    dispatch = jest.fn();

    props = {
      dispatch,
      history,
      location,
      match: mockMatch
    };
    component = render(
      <MemoryRouter initialEntries={[{pathname: `/`, key: 'testKey'}]}>
        <Provider store={store}>
          <Home {...props}/>
        </Provider>
      </MemoryRouter>
    );
  });

  it('should match the snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});