import { combineReducers } from "../../modules/redux/index.js"
import { assign } from "../../utils/index.js"
import { UPDATE_USER_INFO } from "../actions/index.js"

// 更新用户信息
function fetchUser (state = {}, action) {
  switch (action.type) {
    case UPDATE_USER_INFO:
      return assign({}, state, action.userInfo)
    default:
      return state
  }
}

export default combineReducers({
  userInfo: fetchUser
})
