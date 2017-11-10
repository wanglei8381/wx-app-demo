Page({
  onLoad () {
    const ctx = wx.createCanvasContext('myCanvas')
    ctx.setFontSize(20)
    ctx.fillText('商家动态详情页', 20, 20)
    ctx.fillText('MINAMINAMINAMINAMINAMINAMINAMINAMINAMINA', 100, 100)
    ctx.draw()
  },

  tap (e) {
    const name = e.target.dataset.name
    wx.setClipboardData({
      data: name,
      success: function (res) {
        console.log(res)
      }
    })
  },
  tap2 () {
    wx.getClipboardData({
      success: function (res) {
        console.log(res.data) // data
      }
    })
  }
})
