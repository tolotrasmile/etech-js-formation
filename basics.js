// Implicite return
const sum = (a, b) => { a++; return a + b } // La valeur après l'arrow est directement retournée
console.log(sum(1, 2))

// JavaScript *this* contextuel

class Person {
  constructor (name) {
    this.name = name
  }

  trigger () {
    setTimeout(() => {
      console.log(this.name)
    }, 500)
  }
}

let rakoto = new Person('Rakoto')
rakoto.trigger()
