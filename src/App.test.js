import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import App from './App';

const mockStore = configureMockStore([thunk]);

it('renders without crashing', () => {
  // Arrange
  const initialState = {
    activities: {
      byId: {}
    }
  };

  const div = document.createElement('div');

  // Act
  const { getByText } = render((
      <Provider store={mockStore(initialState)}>
          <App/>
      </Provider>
  ), div);

  // Assert
  const linkElement = getByText(/Quiz/i);
  expect(linkElement).toBeInTheDocument();
});
