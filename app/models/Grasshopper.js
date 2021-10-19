export default class Grasshopper {
  constructor(name, weightGrams, gender, lengthMm) {
    this.name = name
    this.weightGrams = weightGrams
    this.gender = gender
    this.lengthMm = lengthMm
  }
  eat(food) {
    console.log(`Some of the ${food}`)
  }
  speak(noise) {
    alert(`The grasshopper named ${this.constructor.name} says ${noise}!`)
  }
}
