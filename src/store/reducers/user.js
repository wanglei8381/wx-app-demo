import { UPDATE_USER_INFO } from '../action-types'
import Immutable from 'immutable'
import {
  assign
} from 'utils'

// 更新用户信息
export const userInfo = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_USER_INFO:
      return Immutable.merge(state, action.userInfo)
    // return assign({}, state, action.userInfo)
    default:
      return state
  }
}
