function nextTick (cb) {
  return new Promise((resolve) => {
    setTimeout(() => {
      cb()
      resolve()
    }, 0)
  })
}

function noop () {
}

async function run (options) {
  var {
    onLaunch = noop,
    onShow = noop,
    onLoad = noop,
    onReady = noop
  } = options
  if (options.__isApp) {
    await nextTick(onLaunch)
    await nextTick(onShow)
  } else {
    await nextTick(onLoad)
    await nextTick(onShow)
    await nextTick(onReady)
  }
}

window.App = function (options) {
  options.__isApp = true
  run(options)

  return {
    onError: options.onError || noop
  }
}

window.Page = function (options) {
  run(options)
  return {
    onHide: options.onHide || noop,
    onUnload: options.onUnload || noop
  }
}
