import Axe, { WPage } from "../../modules/axe/index.js"

const dog = {
  name: 'Dog',
  data () {
    return {
      name: 'dog',
      name1: 'dog1',
      name2: 'dog2',
      name3: 'dog3',
      name4: 'dog4'
    }
  },

  someFn () {
    return 'Dog'
  },

  onInit () {
    console.log('DogInit')
  },

  onLoad () {
    console.log('DogLoad')
  },

  onShow () {
    console.log('DogShow')
  },

  onReady () {
    console.log('DogReady')
  }
}

const cat = {
  name: 'Cat',
  data () {
    return {
      name: 'cat',
      name1: 'cat1',
      name2: 'cat2',
      name3: 'cat3',
      name4: 'cat4'
    }
  },

  someFn () {
    return 'Cat'
  },

  onInit () {
    console.log('CatInit')
  },

  onLoad () {
    console.log('CatLoad')
  },

  onShow () {
    console.log('CatShow')
  },

  onReady () {
    console.log('CatReady')
  }
}

const bird = {
  name: 'bird',
  data () {
    return {
      name: 'bird',
      name2: 'bird2'
    }
  },

  someFn () {
    return 'bird'
  },

  onInit () {
    console.log('birdInit')
  },

  onLoad () {
    console.log('birdLoad')
  },

  onShow () {
    console.log('birdShow')
  },

  onReady () {
    console.log('birdReady')
  }
}

const bear = {
  name: 'bear',
  data () {
    return {
      name: 'bear',
      name3: 'bear3'
    }
  },

  someFn () {
    return 'bear'
  },

  onInit () {
    console.log('bearInit')
  },

  onLoad () {
    console.log('bearLoad')
  },

  onShow () {
    console.log('bearShow')
  },

  onReady () {
    console.log('bearReady')
  }
}

const bull = {
  data () {
    return {
      name: 'bull',
      name4: 'bull4'
    }
  },

  someFn () {
    return 'bull'
  },

  onInit () {
    console.log('bullInit')
  },

  onLoad () {
    console.log('bullLoad')
  },

  onShow () {
    console.log('bullShow')
  },

  onReady () {
    console.log('bullReady')
  },
  mixins: [bear]
}

Axe.mixin(dog).mixin(cat)

const animal = {
  data () {
    return {
      name: 'animal'
    }
  },

  onInit () {
    console.log('animalInit')
  },

  onLoad () {
    console.log('animalLoad')
  },

  onShow () {
    console.log('animalShow')
  },

  onReady () {
    console.log('animal==', this.name)
    console.log('name====', this.data.name)
    console.log('name4===', this.data.name4)
    console.log('name3===', this.data.name3)
    console.log('name2===', this.data.name2)
    console.log('name1===', this.data.name1)
    console.log('someFn==', this.someFn())
  },

  mixins: [bird, bull]
}

WPage(animal)
