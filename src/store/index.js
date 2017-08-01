import Immutable from 'immutable'
import initialState from './state'
import { provider } from '../modules/axe-redux/index'
import reducers from './reducers/index'
import log from './log'
import reduxThunk from '../modules/redux-thunk/index'

import {
  createStore,
  applyMiddleware
} from 'redux'

let store = createStore(reducers, Immutable(initialState), applyMiddleware(reduxThunk, log))

// 为小程序提供 store 绑定
provider(store)

export default store
