import { WPage } from '../../modules/axe/index'
let page = WPage({
  data: {
    text: 'This is page data.'
  },

  viewTap () {
    console.log('viewTap', this)
  },

  onLoad () {
    console.log('---->>>>onReady1')
  },

  onInit () {
    console.log('----->>>>>home init')
  }
})

page.on('me', function (msg) {
  console.log('====>>>', msg, this)
  this.setData({
    text: msg
  })
  this.viewTap()
})
