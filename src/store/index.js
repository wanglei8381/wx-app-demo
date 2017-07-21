import Axe from 'axe'
import state from './state'
import reducers from './reducers/index'

import { createStore } from 'redux'

let store = createStore(reducers, state)

// 全局mixin
Axe.mixin({
  $store: store,
  onLoad () {
    if (!this.mapState) return
    store.subscribe(() => {
      this.mapState(store.getState())
    })
  }
})

export default store
