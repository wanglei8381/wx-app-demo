import { updatePagesTplsData } from 'actions'
export default {
  data () {
    return {
      mc: {
        title: 'MC'
      }
    }
  },

  onReady () {
    setTimeout(() => {
      this.$store.dispatch(updatePagesTplsData('mc', {
        title: 'MCMC'
      }))
    }, 500)
  }
}
