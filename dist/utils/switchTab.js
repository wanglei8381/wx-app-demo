export function switchTab (options) {
  var ready = false
  var { url, name, data, page } = options
  page = page ? page : name
  var success = () => {
    if (ready) {
      wx.$bus.emit('switchTab:' + name, data)
    } else {
      wx.$bus.on('page:' + page + ':ready', () => {
        ready = true
        wx.$bus.emit('switchTab:' + name, data)
      })
    }
  }
  wx.switchTab({
    url,
    success
  })
}
