const gallery = require('./files/items.json').gallery

const s = { 'big-img': 5, 'medium-img': 3, 'small-img': 2 }
const key = 'widthimg'
const maxWeight = 9
let arr = gallery.map(x => x[key])

const split = (array) => {

  let size = 0

  let sections = []
  let section = []

  let ss = (a) => a.map(x => s[x])

  for (let i = 0; i < array.length; i++) {
    let item = array[i]
    size += s[item]

    if (size <= maxWeight) {
      section.push(item)
    } else {
      size = s[item]
      sections.push(section)
      section = []
    }

  }
  return sections
}

console.log('split', split(arr))
