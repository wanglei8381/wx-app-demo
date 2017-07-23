import axe, { WApp } from "modules/axe/index.js"
import './run'

import { fetchUser } from "store/actions/index.js"

// 数据上报
axe.mixin({
  onReportData (e) {
    console.log(e)
  }
})

// 启动
WApp({
  onLaunch () {
    // wx.setNavigationBarTitle({
    //   title: '当前页面'
    // })

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
  }
})
