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
// console.log(newItems)

let uniq = oldList.filter((e, i, self) => i === self.lastIndexOf(e))
// console.log(uniq)

// Reduce

let numbers = [1, 2, 3, 4, 5, 6]
console.log(numbers.reduce((acc, i) => acc + i, 0))
