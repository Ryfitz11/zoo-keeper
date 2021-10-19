export default class Iguana {
  constructor(name, weightKg, gender, lengthMeter) {
    this.name = name
    this.weightKg = weightKg
    this.gender = gender
    this.lengthMeter = lengthMeter
  }
  eat(food) {
    console.log(`Some of the ${food}`)
  }
  speak(noise) {
    alert(`The iguana named ${this.constructor.name} says ${noise}!`)
  }
}