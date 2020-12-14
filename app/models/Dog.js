import Cat from "./Cat.js";

export default class Dog {
  constructor(name, age, food) {
    this.name = name
    this.age = age
    this.food = food
  }

  eat(food) {
    if (food instanceof Cat) {
      console.log("BORK BORK!!")
    }
    else {
      console.log("BORK");
    }
  }
}