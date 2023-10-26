// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

const names = require('./modules/names')
const sayHi = require('./modules/utils')
const data = require('./modules/alternative-flavor')

require('./modules/mind-grenade')
sayHi('susan')
sayHi(names.john)
sayHi(names.peter)
console.log(data)