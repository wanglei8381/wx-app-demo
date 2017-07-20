import axe, { WApp } from 'axe'

// 数据上报
axe.mixin({
  onReportData (e) {
    console.log(e)
  }
})

// 启动
WApp()
