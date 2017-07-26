import axe, { WPage } from "../../modules/axe/index.js"

axe.mixin({
  onReady () {
    console.log('onReady---->1')
  }
})

axe.mixin({
  onReady () {
    console.log('onReady---->2')
  }
})

WPage({
  onReady () {
    console.log('onReady---->5')
  },
  mixins: [{
    onReady () {
      console.log('onReady---->4')
    },
    mixins: [{
      onReady () {
        console.log('onReady---->3')
      }
    }]
  }]
})
