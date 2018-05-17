// Shorthand Object literal
let name = 'rakoto', age = 31
let person = {name: name, age: age} // to {name, age}

// Destructuring (Destructuration) : Affectation par décomposition

person = {id: 1, name: 'Rakoto', phone: '098765454657', age: 22}

let {name: prop1, age: prop2} = person // {source: target, source: target} = original
let {id: id, phone: phone} = person // Can be `{id, phone} = person ` using shorthand

console.log(prop1, prop2)
// use this things with map function
// Get an array with id and name with destructuring

let persons = [
  {id: 1, name: 'Rakoto', phone: '1111111', age: 11},
  {id: 2, name: 'Rabe', phone: '22222', age: 22},
  {id: 3, name: 'Rasoa', phone: '33333', age: 33, address: 'Ambohimanarina'},
  {id: 4, name: 'Randria', phone: '44444', age: 44}
]

let personsLite = persons.map(({id, name, address = 'Default address'}) => ({id, name, address}))
console.log(personsLite)

// Array destructuring

let [a, b] = [1, 2, 3, 4, 5]
console.log(a, b)

// Rest operator
let [x, y, ...z] = [1, 2, 3, 4, 5]
console.log(x, y, z)

let data = ['CANCELED', 1, 'PROCESSING', 2, 'SUSPENDED', 3]
let obj = {}, key, value

do {
  [key, value, ...data] = data
  obj[key] = value
}
while (data.length > 0)

console.log('DATAS', obj)

// Object.assign
let generalInfo = {id: 1, name: 'Airbus', code: 1, currency: 'dollar'}
let specialInfos = {currency: 'euro', site: 'http://airbus.com'}
let infos = Object.assign({}, generalInfo, specialInfos)
// Object.assign(generalInfo, specialInfos) // generalInfo is mutedÒ

console.log(infos, generalInfo)

// Spread operator
let arr = [1, 2, 3]
let arr2 = [0, ...arr, 4, 5, 6]
console.log(arr2)

let infos2 = [generalInfo, specialInfos]
let res = Object.assign({}, ...infos2)
console.log('res', res)

let array = [[1, 2, [3]], [4, 5], [6, 7, 8]]
let flat = array.reduce((acc, a) => [...acc, ...a], [])
console.log('flat', flat)
let flat2 = [].concat(...array)
console.log('flat2', flat2)

