import { combineReducers } from "../../modules/redux/index.js"
import { userInfo } from './user'
import pages from './pages'

export default combineReducers({
  userInfo,
  pages
})
