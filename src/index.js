import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux'
import { BrowserRouter } from 'react-router-dom';

import createHistory from 'history/createBrowserHistory';
import { configureStore } from './store/index';
import registerServiceWorker from './registerServiceWorker';
import { App } from './components';

const history = createHistory();
const store = configureStore({}, {}, { history });

const basename = process.env.PUBLIC_PATH;
const root = document.querySelector('#root');

const renderApp = () => (
  <Provider store={store}>
    <BrowserRouter basename={basename}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </BrowserRouter>
  </Provider>
);

render(renderApp(), root);

if (module.hot) {
  module.hot.accept('./components/App', () => {
    require('./components/App');
    render(renderApp(), root);
  });
}

registerServiceWorker();
