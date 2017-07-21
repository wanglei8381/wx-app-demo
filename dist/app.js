import axe, { WApp } from "modules/axe/index.js"
import './run'

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
  }
})
