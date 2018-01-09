import feedback from '../../behaviors/feedback'
Component({
  behaviors: [feedback],
  properties: {
    mask: {
      type: Boolean,
      value: false
    }
  }
})
