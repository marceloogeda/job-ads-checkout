import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from 'redux-mock-store';

import App from './App';

const setup = () => {
  const store = configureStore()();
  const component = <App store={store} />;

  return {
    store,
    component
  };
};

describe('# App', () => {
  it.skip('renders without crashing', () => {
    const div = document.createElement('div');
    const { component } = setup();

    ReactDOM.render(component, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
