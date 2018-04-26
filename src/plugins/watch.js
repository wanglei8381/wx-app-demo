import Axe from 'axe'
const a = 1
Axe.mixin({
  onInit() {
    console.log(a)
  }
})
