// Includes
// Return true if the array contains an element

let ids = [1, 2, 3, 4]
ids = ids.filter((item) => item > 1)
// console.log(ids)
// console.log(items.includes(1))

let articles = [
  {id: 1, name: 'Vary', price: 100, sold: true},
  {id: 2, name: 'Sira', price: 200, sold: false},
  {id: 3, name: 'Mofo', price: 300, sold: true}
]

ids = [2, 3]

// Filter
let filtered = articles.filter((x) => ids.includes(x.id))
console.log('filtered', filtered)

// Some
let some = articles.some(item => item.sold)
console.log('Some', some)

// Combine some and includes
let data = [['aaa', 'bbb'], ['ccc', 'ddd']]
let exists = (array, search) => array.some(row => row.includes(search))
console.log('exists', exists(data, 'eef'))

// Map
let map = articles.map(article => article.name)
console.log('map', map)

// Combine map
const numbers = [
  [1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5]
]

let transpose = numbers[0].map((e, i) => numbers.map(row => row[i]))
console.log(transpose)
