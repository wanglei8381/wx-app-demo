import { WPage } from "../../modules/axe/index.js"
WPage({
  data: {
    text: 'This is page data.'
  },
  onInit: function (options) {
    // 页面编译之前.
    console.log('----->onInit')
  },
  onLoad: function (options) {
    // Do some initialize when page load.
    console.log('----->onLoad', options)
  },
  onReady: function () {
    // Do something when page ready.
    console.log('----->onReady')
  },
  onShow: function () {
    // Do something when page show.
    console.log('----->onShow')
  },
  onHide: function () {
    // Do something when page hide.
    console.log('----->onHide')
  },
  onUnload: function () {
    // Do something when page close.
    console.log('----->onUnload')
  },
  onPullDownRefresh: function () {
    // Do something when pull down.
    console.log('----->onPullDownRefresh')
  },
  onReachBottom: function () {
    // Do something when page reach bottom.
    console.log('----->onReachBottom')
  },
  onShareAppMessage: function () {
    // return custom share data when user share.
    console.log('----->onShareAppMessage')
  },
  onPageScroll: function () {
    // Do something when page scroll
    console.log('----->onPageScroll')
  },
  // Event handler.
  viewTap: function () {
    console.log(this)
    this.setData({
      text: 'Set some data for updating view.'
    })
  },
  customData: {}
})
