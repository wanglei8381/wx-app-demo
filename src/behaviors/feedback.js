export default Behavior({
  properties: {
    timeout: {
      type: Number,
      value: 2000
    },
    visible: {
      type: Boolean,
      value: false,
      observer (val) {
        if (val) {
          this.setData({
            animMode: 'in'
          })
          this.autoClose()
        }
      }
    }
  },

  data: {
    animMode: 'in'
  },

  methods: {
    autoClose () {
      setTimeout(() => {
        this.setData({
          animMode: 'out'
        })
      }, this.data.timeout)
    },

    handleAnimationEnd () {
      if (this.data.animMode === 'out') {
        this.triggerEvent('close')
      }
    }
  }
})
