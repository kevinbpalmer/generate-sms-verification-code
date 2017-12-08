const generator = require('./index.js')

console.log(generator(8, {type: 'string'}), 'typeof: ', typeof(generator(8, {type: 'string'})));
console.log(generator(8, {type: 'number'}), 'typeof: ', typeof(generator(8, {type: 'number'})));

console.log(generator(1));
