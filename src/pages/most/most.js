import { WPage } from 'axe'

import {
  createEvent,
  combine
} from 'most'

var dom1$ = createEvent()
var dom2$ = createEvent()

var page = WPage({
  data: {
    addRes: 0
  },
  onInput1: dom1$.bindEvent,
  onInput2: dom2$.bindEvent
})

combine(
  (a, b) => a + b,
  dom1$.map((e) => Number(e.detail.value)).startWith(0),
  dom2$.map((e) => Number(e.detail.value)).startWith(0)
)
  .observe((n) => {
    page.setData({
      addRes: n
    })
  })
