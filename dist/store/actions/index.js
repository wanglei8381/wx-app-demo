import {
  UPDATE_USER_INFO,
  UPDATE_PAGES_TPLS_DATA
} from '../action-types'

export function fetchUser (userInfo) {
  return {
    type: UPDATE_USER_INFO,
    userInfo
  }
}

export function updatePagesTplsData (name, data) {
  return {
    type: UPDATE_PAGES_TPLS_DATA,
    name,
    data
  }
}
