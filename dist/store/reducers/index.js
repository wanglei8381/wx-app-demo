import { combineReducers } from "../../modules/redux/index.js"
import { assign } from "../../utils/index.js"
import {
  UPDATE_USER_INFO,
  UPDATE_PAGES,
  UPDATE_PAGES_TPLS_DATA
} from "../actions/index.js"

// 更新用户信息
function fetchUser (state = {}, action) {
  switch (action.type) {
    case UPDATE_USER_INFO:
      return assign({}, state, action.userInfo)
    default:
      return state
  }
}

// 更新页面配置信息
function fetchPages (state = {}, action) {
  switch (action.type) {
    case UPDATE_PAGES:
      return assign({}, state, action.pages)
    default:
      return state
  }
}

export default combineReducers({
  userInfo: fetchUser,
  pages: fetchPages
})
