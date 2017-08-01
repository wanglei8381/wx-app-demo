import { combineReducers } from "../../modules/redux/index.js"
import { assign } from "../../utils/index.js"
import { UPDATE_PAGES_TPLS_DATA } from '../action-types'

// 更新页面模板数据
function updatePagesTplsData (state = {}, action) {
  switch (action.type) {
    case UPDATE_PAGES_TPLS_DATA:
      return assign({}, state, action.pages)
    default:
      return state
  }
}

function returnDefault (state) {
  return state
}

// 创建命名空间的reducer
function createNamedWrapperReducer (reducerFunction, reducerName) {
  return (state, action) => {
    const { name } = action
    const isInitializationCall = state === undefined
    console.log('--->>>', state)
    if (name !== reducerName && !isInitializationCall) return state

    return reducerFunction(state, action)
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
