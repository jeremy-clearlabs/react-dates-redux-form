// import camelCase from 'lodash/camelCase'
import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
// import { reducer as thunk } from 'redux-saga-thunk'
import { routerReducer as router } from 'react-router-redux';

const reducers = {
  form,
  // thunk,
  router,
}

// const req = require.context('.', true, /\.\/.+\/reducer\.js$/)

// req.keys().forEach((key) => {
//   const storeName = camelCase(key.replace(/\.\/(.+)\/.+$/, '$1'))
//   reducers[storeName] = req(key).default
// })

export default combineReducers(reducers)
