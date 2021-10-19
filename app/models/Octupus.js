export default class Octopus {
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
    alert(`The octopus named ${this.constructor.name} says ${noise}!`)
  }
}