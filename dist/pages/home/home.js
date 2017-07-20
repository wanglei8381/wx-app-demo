import { WPage } from "../../modules/axe/index.js"
import head from "../../templates/head/head.js"
WPage({
  data: {
    text: 'This is page data.'
  },
  onReady: function () {
    // 用户登录
    wx.login({
      success ({ code, errMsg }) {
        if (code) {
          console.log('[code]=', code)

          wx.getUserInfo({
            success (res) {
              console.log('[userinfo]=', res)
            }
          })

          wx.getWeRunData({
            success(res) {
              console.log('[WeRunData]=', res)
            }
          })
        }
      }
    })
  },
  mixins: [head]
})
