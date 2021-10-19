export default class Walrus {
  constructor(name, weightKg, gender, lengthMeter) {
    this.name = name
    this.weightKg = weightKg
    this.gender = gender
    this.lengthMeter = lengthMeter
  }
  eat(food) {
    console.log(`Most of the ${food}`)
  }
  speak(noise) {
    alert(`The walrus named ${this.constructor.name} says ${noise}!`)
  }
}