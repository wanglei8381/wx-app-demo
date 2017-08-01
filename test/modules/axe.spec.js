import Axe from '../../src/modules/axe'

import '../helpers'

test('new Axe', () => {
  const axe = new Axe({}, App)
  expect(axe._cxt).toBe(axe);
  expect(axe._isPage).toBe(false);
  expect(axe._ready).toBe(false);
  expect(axe._active).toBe(false);
});

test('Axe App onInit', (done) => {
  const axe = new Axe({
    onInit() {
      done()
    }
  }, App)
});

test('Axe App onLaunch', (done) => {
  const axe = new Axe({
    onLaunch() {
      expect(this._ready).toBe(true);
      done()
    }
  }, App)
});

test('Axe App onShow', (done) => {
  const axe = new Axe({
    onShow() {
      expect(this._active).toBe(true);
      done()
    }
  }, App)
});

test('Axe Page onShow', (done) => {
  const axe = new Axe({
    onShow() {
      expect(this._active).toBe(true);
      done()
    }
  }, Page)
});

test('Axe Page onReady', (done) => {
  const axe = new Axe({
    onReady() {
      expect(this._ready).toBe(true);
      done()
    }
  }, Page)
});
