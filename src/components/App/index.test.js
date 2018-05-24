import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { StaticRouter } from 'react-router-dom'
import App from '.';
import configureStore from 'redux-mock-store' //ES6 modules

const middlewares = []
const mockStore = configureStore(middlewares);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    (
      <Provider store={mockStore({})}>
        <StaticRouter context={{}}>
          <App />
        </StaticRouter>
      </Provider>
    )
  , div);
  ReactDOM.unmountComponentAtNode(div);
});
