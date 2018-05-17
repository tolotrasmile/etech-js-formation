const symbol = Symbol('key')

let obj = {
  [symbol]: 1,
  1: 'one',
  one: 1
}

console.log('obj[symbol]', obj[symbol])
console.log('Object.keys', Object.keys(obj))
console.log('Reflect.ownKeys', Reflect.ownKeys(obj))
// Callback hell
