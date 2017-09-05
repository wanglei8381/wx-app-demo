import Immutable from "../modules/seamless-immutable/index.js"
import initialState from './state'
import { provider } from '../modules/axe-redux/index'
import reducers from './reducers/index'
import log from './log'
import reduxThunk from '../modules/redux-thunk/index'

import {
  createStore,
  applyMiddleware
} from "../modules/redux/index.js"

let store
if ("production" !== 'production') {
  store = createStore(reducers, Immutable(initialState), applyMiddleware(reduxThunk, log))
} else {
  store = createStore(reducers, Immutable(initialState), applyMiddleware(reduxThunk))
}

// 为小程序提供 store 绑定
provider(store)

export default store
