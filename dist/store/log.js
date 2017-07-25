import { clone } from "../utils/index.js"
/**
 * 记录所有被发起的 action 以及产生的新的 state。
 */
const logger = store => next => action => {
  console.group(action.type)
  console.info('dispatching', action)
  let result = next(action)
  console.log('next state', clone(store.getState(), true))
  console.groupEnd(action.type)
  return result
}

export default logger
