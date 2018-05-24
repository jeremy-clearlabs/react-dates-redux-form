import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'
import reducer from './reducer'

export const history = createHistory()
const devtools = process.env.NODE_ENV === 'development' && window.devToolsExtension
  ? window.devToolsExtension
  : () => fn => fn

export const configureStore = (initialState, services = {}, otherMiddleware = {}) => {
  const { history } = otherMiddleware;
  // const sagaMiddleware = createSagaMiddleware()
  const routerHistoryMiddleware = routerMiddleware(history)

  const enhancers = [
    applyMiddleware(
      thunk,
      // ...middlewares,
      // sagaMiddleware,
      routerHistoryMiddleware,
    ),
    devtools(),
  ]

  const store = createStore(reducer, initialState, compose(...enhancers))
  // let sagaTask = sagaMiddleware.run(sagas, services)

  // if (module.hot) {
  //   module.hot.accept('./reducer', () => {
  //     const nextReducer = require('./reducer').default
  //     store.replaceReducer(nextReducer)
  //   })
  //   module.hot.accept('./sagas', () => {
  //     const nextSagas = require('./sagas').default
  //     sagaTask.cancel()
  //     sagaTask.done.then(() => {
  //       sagaTask = sagaMiddleware.run(nextSagas, services)
  //     })
  //   })
  // }

  return store
}

// export default store;