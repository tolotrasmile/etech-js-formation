let inventory = [
  {type: 'machine', value: 1},
  {type: 'machine', value: 2},
  {type: 'animal', value: 2},
  {type: 'animal', value: 4},
  {type: 'robot', value: 4},
  {type: 'robot', value: 1},
  {type: 'machine', value: 1}
]

let expect = [
  {type: 'machine', values: [1, 2, 17]},
  {type: 'animal', values: [3, 4]},
  {type: 'robot', values: [5, 6]}
]

let groupedBy = (key, value, array) =>
  array.reduce((acc, item) => {
    let found = acc.find(a => a[key] === item[key])
    found ? found.values.push(item[value]) : acc.push({[key]: item[key], values: [item[value]]})
    return acc
  }, [])


console.log(groupedBy('value', 'type', inventory))