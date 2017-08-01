import { combineReducers } from 'redux'
import { assign } from 'utils'
import {
  returnDefault,
  createNamedWrapperReducer
} from '../utils'
import { UPDATE_PAGES_TPLS_DATA } from '../action-types'

// 更新页面模板数据
function updatePagesTplsData (state = {}, action) {
  switch (action.type) {
    case UPDATE_PAGES_TPLS_DATA:
      return assign({}, state, action.data)
    default:
      return state
  }
}

function fetchPagesTplsData (name) {
  return createNamedWrapperReducer(updatePagesTplsData, name)
}

export default combineReducers({
  'pages/frame/frame': combineReducers({
    templates: returnDefault,
    ma: fetchPagesTplsData('ma'),
    mb: fetchPagesTplsData('mb'),
    mc: fetchPagesTplsData('mc')
  })
})
