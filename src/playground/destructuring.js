


// const person = {
//   name: 'Andrew',
//   age: 27,
//   location: {
//     city: 'Philadelphia',
//     temp: 88,
//   }
// }

// const {name:firstname = 'Anonymous', age} = person

// // const name = person.name
// // const age = person.age


// console.log (`${firstname} is ${age}. `)

// const {city, temp:temperature} = person.location

// if (city && temperature) {
//   console.log(`Its ${temperature} in ${city}.`)
// }

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin',
//   }
// }

// const {name: publisherName = 'Self-Published'} = book.publisher

// //self-published
// console.log(publisherName) 

const address = ['1299 S Juniper Street', 'Philadelphia','Pennsylvania','19147']

const [, , state, ] = address

console.log(`You are in  ${state}.`)

const item = ['Coffe (iced)', '$3.00','$3.50','$3.75']

const [itemName, , medium] = item

console.log(`A medium ${itemName} costs ${medium} `)