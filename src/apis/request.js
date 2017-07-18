import {
  noop,
  clone
} from './utils'

import {
  getSid,
  clearSid
} from './sid'

let count = 0

function request (options) {
  let _options = clone(options)

  let {
    fail = noop,
    success = noop,
    header = {}
  } = options

  return new Promise((resolve, reject) => {
    getSid().then((sid) => {
      header.sid = sid

      options.success = (res) => {
        if (res.statusCode === 200 && res.data.success) {
          count = 0
          success(res.data)
          resolve(res)
        } else if (res.data.code) {
          switch (res.data.code) {
            case 5001:
            // sid 空
              break
            case 5002:
              // sid 无效
              count++
              // 最多请求5次
              if (count <= 5) {
                clearSid()
                request(_options)
              } else {
                fail(res)
                reject(res)
              }
              break
          }
        } else {
          fail(res)
          reject(res)
        }
      }

      options.fail = (err) => {
        fail(err)
        reject(err)
      }

      options.header = header
      wx.request(options)
    }).catch((err) => {
      fail(err)
      reject(err)
    })
  })
}

module.exports = request
