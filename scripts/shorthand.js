
// Shorthand / Shorthand shortcut technics

// Double pipe ||
// Falsy values: false, null, undefined, 0, NaN
console.log(undefined ? 'TRUFY' : 'FALSY')
let customer = {id: 1, name: 'Customer'}
customer.children = customer.children || [] // [] : Fallback value
customer.children.push({id: 1, name: 'Customer'})
console.log(customer)

// And operator &&

customer = {id: 1, name: 'Customer', children: {name: 'Tolotra'}}
let name = (customer && customer.children && customer.children.name) || 'default'
console.log(name)

//