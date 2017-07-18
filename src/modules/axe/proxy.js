export function proxyData (axe) {
  if (!axe._isPage) return
  axe.constructor.mixin({
    onLoad () {
      Object.defineProperty(axe, 'data', {
        get () {
          return axe.$cxt.data
        }
      })
    }
  })
}
