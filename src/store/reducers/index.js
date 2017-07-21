import { combineReducers } from 'redux'
import { assign } from 'utils'
import { UPDATE_USER_INFO } from 'actions'

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
