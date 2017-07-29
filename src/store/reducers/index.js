import { combineReducers } from 'redux'
import {
  assign,
  clone
} from 'utils'
import {
  UPDATE_USER_INFO,
  UPDATE_PAGES,
  UPDATE_PAGES_TPLS_DATA
} from 'actions'

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
    case UPDATE_PAGES_TPLS_DATA:
      return fetchPagesTplsData(state, action)
    default:
      return state
  }
}

// 更新页面模板的数据
function fetchPagesTplsData (state = {}, action) {
  const tpls = state[action.path].templates
  return tpls.map((item) => {
    var tpl = clone(item, true)
    return assign(tpl.data, action.datas[item.key])
  })
}

export default combineReducers({
  userInfo: fetchUser,
  pages: fetchPages
})
