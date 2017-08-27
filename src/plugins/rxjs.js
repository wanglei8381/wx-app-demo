import axe from 'axe'
import {
  Subject,
  Observable
} from 'rxjs'

axe.mixin({
  onInit () {
    var domStreams = this.domStreams
    if (domStreams && Array.isArray(domStreams)) {
      domStreams.forEach((key) => {
        this[key] = new Subject()
        var onKey = 'on' + key.trim().replace(/^[a-z]/, (s) => s.toUpperCase())
        this[onKey] = (e) => {
          this[key].next(e)
        }
      })
    }

    this.$watchAsObservable = (exp) => {
      return Observable.create(observer => {
        const watch = (data) => {
          if (data.hasOwnProperty(exp)) {
            observer.next(data[exp])
          }
        }

        this.on('axe:updated', watch)
        return () => {
          this.off('axe:updated', watch)
        }
      })
    }
  }
})
