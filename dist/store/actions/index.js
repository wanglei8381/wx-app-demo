export const UPDATE_USER_INFO = 'updateUserInfo'

export function fetchUser (userInfo) {
  return {
    type: UPDATE_USER_INFO,
    userInfo
  }
}
