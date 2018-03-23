import {
  noop
} from './utils'

import {
  getSid,
  clearSid
} from './sid'

export function request (options) {
  let {
    fail = noop,
    success = noop,
    data = {}
  } = options

  return new Promise((resolve, reject) => {
    getSid().then((sid) => {
      data.sid = sid

      options.success = (res) => {
        success(res.data)
        resolve(res.data)
      }

      options.fail = (err) => {
        fail(err)
        reject(err)
      }

      options.data = data
      wx.request(options)
    }).catch((err) => {
      fail(err)
      reject(err)
    })
  })
}

export default request
