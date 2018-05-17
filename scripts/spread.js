// Object spread
let person = {id: 1, name: 'Rakoto', phone: 123}
let info = {email: 'email@mail.com', address: 'eTech', phone: 456}
let pi = {...person, ...info}
console.log(pi)
console.log(person) // immuted

// Object literal dynamic key
let value = 'Airbus'
let key = 'brand'
let p = {
  [key]: value
}
console.log(p)

// Object keys, values, entries
// Keys

console.log('person keys', Object.keys(person)) // Get an array with object properties
console.log('person values', Object.values(person)) // Get an array with object values
console.log('person entries', Object.entries(person)) // Get an array every property with value mapped in array

let obj = {
  1: 'AAA',
  2: 'BBB',
  3: 'CCC',
  4: 'DDD'
}

let res = Object.entries(obj).map(x => ({[x[0]]: x[1]}))
let res2 = Object.entries(obj).map(([key, value]) => ({[key]: value}))

console.log(res, res2)
