import { updatePagesTplsData } from "../../store/actions/index.js"
export default {
  data () {
    return {
      mb: {
        title: 'MB'
      }
    }
  },

  onReady () {
    setTimeout(() => {
      this.$store.dispatch(updatePagesTplsData('mb', {
        title: 'MBMB'
      }))
    }, 400)
  }
}
