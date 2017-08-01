import { combineReducers } from 'redux'
import { userInfo } from './user'
import pages from './pages'

export default combineReducers({
  userInfo,
  pages
})
