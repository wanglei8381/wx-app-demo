export const UPDATE_USER_INFO = 'updateUserInfo'
export const UPDATE_PAGES = 'updatePages'
export const UPDATE_PAGES_TPLS_DATA = 'updatePagesTplsData'

export function fetchUser (userInfo) {
  return {
    type: UPDATE_USER_INFO,
    userInfo
  }
}

export function fetchPages (pages) {
  return {
    type: UPDATE_PAGES,
    pages
  }
}

export function updatePagesTplsData (data) {
  return {
    type: UPDATE_PAGES_TPLS_DATA,
    data
  }
}
