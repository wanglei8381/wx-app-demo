import { WPage } from 'axe'

WPage({
  data: {
    addRes: 0,
    a: '',
    b: ''
  },

  domStreams: ['add1$', 'add2$'],

  onInput1 (e) {
    this.setData({
      a: e.detail.value
    })
  },

  onInput2 (e) {
    this.setData({
      b: e.detail.value
    })
  },

  onReady () {
    var add1$ = this.add1$.map((e) => Number(e.detail.value)).startWith(0)
    var add2$ = this.add2$.map((e) => Number(e.detail.value)).startWith(0)
    add1$.combineLatest(add2$, (a, b) => a + b)
      .subscribe((val) => {
        this.setData({ addRes: val })
      })

    var a$ = this.$watchAsObservable('a')
    var b$ = this.$watchAsObservable('b')
    a$.combineLatest(b$, (a, b) => {
        return a.length > 0 && a.length < 10 && b != null
      })
      .subscribe(val => {
        console.log('$watchAsObservable', val)
      })
  }
})
