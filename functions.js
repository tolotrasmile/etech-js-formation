let scores = [
  {playerId: 1, score: 1},
  {playerId: 2, score: 2},
  {playerId: 3, score: 3},
  {playerId: 4, score: 4}
]

let updateScore = (scores, score) => {
  let found = scores.find(p => p.playerId === score.playerId)
  return found ? found.score += score.score : scores.push(score)
}

// console.log(updateScore(scores, {playerId: 1, score: 5}))
// console.log(scores)

const oldList = [
  {id: 1},
  {id: 2},
  {id: 3},
  {id: 4},
  {id: 2}
]

const newList = [
  {id: 1},
  {id: 5},
  {id: 3},
  {id: 6}
]

const newItems = newList.filter(item => !oldList.find(o => o.id === item.id))
console.log('newItems', newItems)
console.log('{id: 1} === {id: 1}', {id: 1} === {id: 1})

console.log('index of', oldList.indexOf({id: 1}))

let l = [1, 2, 3, 4, 1, 4]
let uniq = l.filter((e, i, self) => i === self.indexOf(e))
console.log('uniq', uniq)

// Reduce

let numbers = [1, 2, 3, 4, 5, 6]
console.log(numbers.reduce((acc, i) => acc + i, 0))
