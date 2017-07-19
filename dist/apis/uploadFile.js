import { getSid } from './sid'
import {
  clone
} from './utils'

export function uploadFile (options) {
  let { header = {} } = options

  return new Promise((resolve, reject) => {
    // 已经是网络资源不上传
    if (options.filePath.indexOf('http') > -1) {
      return resolve(options.filePath)
    }

    getSid().then((sid) => {
      header.sid = sid

      options.success = (res) => {
        res.data = JSON.parse(res.data)
        if (res.statusCode === 200 && res.data.isSuccess) {
          resolve(res.data.content)
        } else {
          reject(res)
        }
      }

      options.header = header

      wx.uploadFile(options)
    }, (errMsg) => {
      reject(errMsg)
    })
  })
}

export function multiUploadFile (options) {
  let arr = options.filePaths.map((filePath) => {
    let _options = clone(options)
    _options.filePath = filePath
    return uploadFile(_options)
  })

  return Promise.all(arr)
}
