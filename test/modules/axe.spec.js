import Axe from '../../src/modules/axe'

import '../helpers'

test('new Axe', () => {
  const axe = new Axe({}, App)
  expect(axe._cxt).toBe(axe);
  expect(axe._isPage).toBe(false);
  expect(axe._ready).toBe(false);
  expect(axe._active).toBe(false);
});
