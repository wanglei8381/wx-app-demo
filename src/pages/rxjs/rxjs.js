import { WPage } from 'axe'

WPage({
  data: {
    addRes: 0
  },

  domStreams: ['add1$', 'add2$'],

  onReady () {
    var add1$ = this.add1$.map((e) => Number(e.detail.value)).startWith(0)
    var add2$ = this.add2$.map((e) => Number(e.detail.value)).startWith(0)
    add1$.combineLatest(add2$, (a, b) => a + b)
      .subscribe((val) => {
        this.setData({ addRes: val })
      })
  }
})
