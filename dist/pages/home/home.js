import { WPage } from "../../modules/axe/index.js"
import head from "../../templates/head/head.js"
import { fetchUser } from "../../store/actions/index.js"
WPage({
  data: {
    text: 'This is page data.'
  },
  mapState (state) {
    console.log(state)
  },
  onReady: function () {
    const _this = this
    // 用户登录
    wx.login({
      success ({ code, errMsg }) {
        if (code) {
          // console.log('[code]=', code)

          wx.getUserInfo({
            success (res) {
              _this.$store.dispatch(fetchUser(res.userInfo))
            }
          })
        }
      }
    })
  },
  mixins: [head]
})
