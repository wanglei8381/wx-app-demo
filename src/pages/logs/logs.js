import { WPage } from '../../modules/axe/index'
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
    console.log('---->>>>onReady1')
  },

  onInit () {
    console.log('----->>>>>home init')
  }
})
