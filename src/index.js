/* eslint-disable import/default */
import 'styles/index.scss';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from 'containers/App';
import configureStore, { history } from 'store/configureStore';
import * as serviceWorker from 'serviceWorker';

const store = configureStore();
const renderApp = () =>
  render(
    <Provider store={store}>
      <App history={ history } />
    </Provider>,
    document.getElementById('root')
  )

if (process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept('./containers/App', renderApp)
}

renderApp()

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
