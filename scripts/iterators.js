
import Matrix from './Matrix'

class UserList {
  constructor () {
  	this.items = []
  }

  add (...items) {
    this.items.push(...items)
  }

  remove (item) {
    this.items = this.items.filter(i => i !== item)
  }

  [Symbol.iterator]() {
    return this.items[Symbol.iterator]()
  }

}

let users = new UserList()

users.add(1, 2, 3, 4, 5)

for (let item of users) {
	console.log(item)
}


