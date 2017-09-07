Page({
  Promise () {
    console.log('Promise', Promise == null)
    try {
      // IOS8 对Promise有bug
      new Promise((resolve) => {
        resolve('ok')
      }).then((res) => {
        console.log('---->>>>>>Promise:OK')
        wx.showToast({
          title: res
        })
      })
    } catch (e) {
      console.log('---->>>>>>Promise:error')
    }
  },

  Symbol () {
    console.log('Symbol', Symbol)
  },

  Set () {
    console.log('Set', Set)
    var set = new Set([1, 2, 3])
    console.log('Set', set.size)
  },

  Map () {
    console.log('Map', Map)
  }

})
