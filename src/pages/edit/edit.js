Page({
  cursor: 0,
  value: '',
  data: {
    cursor: 0,
    value: '',
    nodes: []
  },

  preview () {
    console.log('preview')
  },

  insertImage () {
    const page = this
    wx.chooseImage({
      sizeType: 'compressed',
      success (res) {
        console.log(res.tempFilePaths)
        const a = page.value.substr(0, page.cursor)
        const b = page.value.substr(page.cursor)
        const text = res.tempFilePaths.map(url => `\n[图片:${url}]\n`).join('')
        page.value = a + text + b
        page.setState({
          value: page.value
        })
      }
    })
  },

  insertVedio () {
  },

  change (e) {
    console.log(e)
    this.cursor = e.detail.cursor
    this.value = e.detail.value
    this.setState({
      value: e.detail.value
    })
  },

  lineChange (e) {
    console.log(e.detail)
    this.setState({
      nodes: this.data.value.split('\n').map(text => {
        return {
          name: 'div',
          children: [{
            type: 'text',
            text
          }]
        }
      })
    })
  },

  blur (e) {
    console.log(e.detail)
    this.cursor = e.detail.cursor
    this.value = e.detail.value
  },

  setState (state) {
    this.setData(Object.assign(state, { cursor: this.cursor }))
  }
})
