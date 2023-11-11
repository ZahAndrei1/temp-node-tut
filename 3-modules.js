//Modules
const names = require('./4-names');//require = import
const sayHi = require('./5-utils');
const data = require('./6-alternative-syntax');
require('./7-Mind-Grenade');

console.log(data);

sayHi('Alida');
sayHi(names.john);
sayHi(names.peter);
