import { WPage } from "../../modules/axe/index.js"
import ma from "../../templates/ma/ma.js"
import mb from "../../templates/mb/mb.js"
import mc from "../../templates/mc/mc.js"
WPage({
  mixins: [ma, mb, mc],
  mapState (state) {
    return {
      pages: state.pages[this.route]
    }
  }
})
