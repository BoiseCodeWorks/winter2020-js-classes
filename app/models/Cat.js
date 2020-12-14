export default class Cat {
  // NOTE Default parameters will be set if value is not provided or is undefined
  constructor(name = "cat", age = 1, color = 'mixed') {
    // whatever is left of the '.' at call time / when accessed
    this.name = name
    this.age = age
    this.color = color
  }

  speak() {
    console.log(`${this.name} says "MEOW"`)
  }

}


// NOTE Export allows for mulitple items to be exported to a single object
// export class Tiger {

// }
