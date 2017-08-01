import Axe from 'axe'
import initialState from './state'
import {
  isPlainObject,
  shallowEqual
} from 'utils'
import reducers from './reducers/index'
import log from './log'
import reduxThunk from '../modules/redux-thunk/index'

import {
  createStore,
  applyMiddleware
} from 'redux'

let $store = createStore(reducers, initialState, applyMiddleware(reduxThunk, log))

// 全局mixin
Axe.mixin({
  $store,
  onLoad () {
    if (!this.onStateChange && !this.mapState) return
    this.$unsubscribe = this.$store.subscribe(() => {
      var state = this.$store.getState()
      listener(this, state)
    })
  },

  onShow () {
    if (this._ready) {
      listener(this, this.$store.getState())
    }
  },

  onReady () {
    listener(this, this.$store.getState())
  },

  onUnload () {
    if (this.$unsubscribe) {
      this.$unsubscribe()
    }
  }
})

function listener (axe, state) {
  if (!axe._active) return
  if (axe.mapState) {
    var nextState = axe.mapState(state)
    if (isPlainObject(nextState) && !shallowEqual(axe.state, nextState)) {
      axe.state = nextState
      axe.setData(axe.state)
    }
  }
  if (axe.onStateChange) {
    axe.onStateChange(state)
  }
}

export default $store
