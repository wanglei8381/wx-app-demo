import { WPage } from "../../modules/axe/index.js"
import { switchTab } from "../../utils/index.js"
import ma from "../../templates/ma/ma.js"
import mb from "../../templates/mb/mb.js"
import mc from "../../templates/mc/mc.js"
WPage({
  name: 'frame',
  mixins: [ma, mb, mc],
  mapState (state) {
    return {
      pages: state.pages[this.route]
    }
  },
  openLog () {
    switchTab({
      url: '/pages/logs/logs',
      page: 'pages/logs/logs',
      name: 'logs',
      data: 'wahahaha'
    })
  }
})
