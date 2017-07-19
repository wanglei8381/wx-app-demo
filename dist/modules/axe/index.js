import Event from '../event/index'
import { proxy } from './proxy'
import { callHook } from './utils'
import {
  bindOptions,
  mergeOptions,
  initMixin
} from './options'

let app = null
class Axe extends Event {
  constructor (options = {}, run) {
    super()
    // 上下文代指自己,主要给Event使用
    this._cxt = this
    // 是否是Page
    this._isPage = run === Page

    // 通过混合代理$cxt属性
    proxy(this)

    let finalOptions = {}
    mergeOptions.call(this, finalOptions, options)
    mergeOptions.call(this, finalOptions, Axe.options)

    // console.log('finalOptions==', finalOptions)

    bindOptions(this, finalOptions)
    callHook('Init', this)
    run(this)
  }

  // 代理setData
  setData (data) {
    if (this.$cxt && this.$cxt.setData) {
      this.$cxt.setData(data)
    } else {
      console.log('[axe][setData]setData需要在onLoad后才可以使用')
    }
  }

  // 代理route
  get route () {
    if (this.$cxt) {
      return this.$cxt.route
    }
  }
}

// 初始化混合
initMixin(Axe)

export function WApp (options) {
  if (app) return app
  app = new Axe(options, App)
  app.$bus = new Event(app)
  return app
}

export function WPage (options) {
  let axe = new Axe(options, Page)
  axe.$root = app
  axe.$bus = app.$bus
  return axe
}

export default Axe
