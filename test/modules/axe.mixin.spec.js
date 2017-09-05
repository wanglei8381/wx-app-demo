import Axe from '../../src/modules/axe'

import '../helpers'

Axe.mixin({
  data () {
    return {
      name: 'axe1'
    }
  },

  someFn () {
    return 1
  }
})

Axe.mixin({
  data () {
    return {
      name: 'axe2'
    }
  },

  someFn () {
    return 2
  }
})

test('Axe mixin', () => {
  const axe = new Axe({
    onReady() {
      expect(this.data.name).toBe('axe2');
      done()
    }
  }, Page)
});
