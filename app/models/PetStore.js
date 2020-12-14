import Cat from "./Cat.js"

export default class PetStore {
  cats = [new Cat("Garfield", 3, "Orange")]
  dogs = []


  printCats() {
    this.cats.forEach(c => c.speak())
  }
}