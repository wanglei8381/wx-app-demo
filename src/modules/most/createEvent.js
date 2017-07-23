import { Stream } from './most'
class DomEvent {
  constructor () {
    this.bindEvent = this.bindEvent.bind(this)
  }

  run (sink, scheduler) {
    this.sink = sink
    this.scheduler = scheduler
  }

  bindEvent (e) {
    tryEvent(this.scheduler.now(), e, this.sink)
  }
}

function tryEvent (t, x, sink) {
  try {
    sink.event(t, x)
  } catch (e) {
    sink.error(t, e)
  }
}

export function createEvent () {
  var domEvent = new DomEvent()
  var sream = new Stream(domEvent)
  sream.bindEvent = domEvent.bindEvent
  return sream
}
