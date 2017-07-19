export function callHook (hookName, axe) {
  hookName = 'on' + hookName
  let hooks = axe[hookName]
  if (hooks) {
    if (!Array.isArray(hooks)) {
      hooks = [hooks]
    }
    hooks.forEach((fn) => {
      fn.call(axe, axe)
    })
  }
}
