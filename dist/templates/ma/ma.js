import { updatePagesTplsData } from "../../store/actions/index.js"
export default {
  data () {
    return {
      ma: {
        title: 'MA'
      }
    }
  },

  onReady () {
    setTimeout(() => {
      this.$store.dispatch(updatePagesTplsData('ma', {
        title: 'MAMA'
      }))
    }, 300)
  }
}
