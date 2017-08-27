import { WPage } from '../../modules/axe/index'
var uid = 0
WPage({
  data: {
    text: 'This is page data.'
  },
  mapState (state) {
    return {
      nickName: state.userInfo.nickName,
      avatarUrl: state.userInfo.avatarUrl
    }
  },
  viewTap () {
    console.log('viewTap', this)
  },

  onLoad () {
    console.log('this._ready==', this._ready)
    this.on('logs', (val) => {
      console.log('logs===', val)
    })
  },

  onReady () {
    console.log('---->>>>onReady')
    this.$bus.on('switchTab:logs', (msg) => {
      console.log('switchTab:logs=', msg)
    })
    this.emit('logs', ++uid)
  }
})
