let sid = null

// 获取sid
export function getSid () {
  return new Promise((resolve, reject) => {
    if (sid) {
      return resolve(sid)
    }

    let _sid = wx.getStorageSync('sid')
    if (_sid) {
      sid = _sid
      return resolve(sid)
    }

    // 用户登录
    wx.login({
      success ({ code, errMsg }) {
        if (code) {
          // 获取用户的openId
          wx.request({
            url: 'https://invoice.wuage-inc.com/userSession/get3rdSessionKey',
            data: {
              code: code
            },
            success: function ({ statusCode, data }) {
              if (statusCode === 200 && data.success) {
                sid = data.content
                wx.setStorageSync('sid', sid)
                resolve(sid)
              } else {
                reject(new Error('获取sid失败'))
              }
            },
            fail: function (err) {
              reject(err)
            }
          })
        } else {
          reject(new Error('获取用户登录态失败！' + errMsg))
        }
      },

      fail () {
        reject(new Error('获取用户登录态失败！'))
      }
    })
  })
}

// 清除sid
export function clearSid () {
  sid = null
  wx.setStorageSync('sid', null)
}
