import {
  extend,
  isFunction
} from '../../utils/index'

import config from './config'

let lifecycleHooks = config.app.lifecycleHooks.concat(config.page.lifecycleHooks)

export function mixin (options) {
  if (Array.isArray(options.mixins)) {
    let mixins = options.mixins
    for (let i = 0, len = mixins.length; i < len; i++) {
      mergeOptions(options, mixins[i])
    }
  }
  return options
}

export function mergeOptions (distOptions, srcOptions) {
  srcOptions = mixin(srcOptions)
  let keys = Object.keys(srcOptions)
  for (let i = 0, len = keys.length; i < len; i++) {
    let key = keys[i]
    if (key === 'data') {
      distOptions.data = distOptions.data || {}
      var data = srcOptions[key]
      if (isFunction(data)) {
        data = data.call(this)
      }
      extend(distOptions.data, data)
    } else if (isHook(key)) {
      distOptions[key] = concatFunction(srcOptions[key], distOptions[key])
    } else {
      distOptions[key] = srcOptions[key]
    }
  }
}

export function bindOptions (axe, options) {
  Object.keys(options).forEach((key) => {
    if (isFunction(options[key])) {
      axe[key] = options[key].bind(axe)
    } else if (isHook(key)) {
      axe[key] = function () {
        // 绑定上下文
        axe.$cxt = this
        options[key].forEach((fn) => {
          fn.call(axe)
        })
      }
    } else {
      axe[key] = options[key]
    }
  })
}

export function initMixin (Axe) {
  Axe.options = {}
  Axe.mixin = function (options) {
    mergeOptions(this.options, options)
  }
}

function isHook (key) {
  return lifecycleHooks.indexOf(key) > -1
}

function concatFunction (a, b) {
  if (!Array.isArray(a)) {
    a = isFunction(a) ? [a] : []
  }

  if (!Array.isArray(b)) {
    b = isFunction(b) ? [b] : []
  }

  return a.concat(b)
}
