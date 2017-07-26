export function callHook (hookName, axe) {
  hookName = 'on' + hookName
  let hook = axe[hookName]
  if (hook) {
    hook()
  }
}
