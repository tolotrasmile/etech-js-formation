'use strict'

function* generator1 () {
  let index = 0
  while (true) {
    yield index++
  }
}

const g1 = generator1()

function* generator2 (i) {
  yield i + 1
  yield i + 2
  yield i + 3
}

function* generator3 (i) {
  yield i
  yield* generator2(i)
  yield i + 10
}

const g2 = generator3(10)

console.log(g2.next().value)
console.log(g2.next().value)
console.log(g2.next().value)
console.log(g2.next().value)
console.log(g2.next().value)
console.log(g2.next().value)

