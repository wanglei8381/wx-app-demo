import Axe from 'axe'
import initialState from './state'
import {
  isPlainObject,
  shallowEqual
} from 'utils'
import reducers from './reducers/index'

import {
  createStore
} from 'redux'

let $store = createStore(reducers, initialState)

$store.subscribe(() => {
  console.log('[store]', JSON.stringify($store.getState()))
})

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
    this._active = true
    if (this._ready) {
      listener(this, this.$store.getState())
    }
  },

  onReady () {
    this._ready = true
    listener(this, this.$store.getState())
  },

  onHide () {
    this._active = false
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
