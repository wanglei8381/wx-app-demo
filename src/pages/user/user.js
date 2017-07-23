import { WPage } from 'axe'
import head from 'templates/head/head.js'
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
  mixins: [head]
})
