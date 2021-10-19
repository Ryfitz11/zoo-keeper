export default class Quail {
  constructor(name, weightKg, gender, lengthMm) {
    this.name = name
    this.weightKg = weightKg
    this.gender = gender
    this.lengthMm = lengthMm
  }
  eat(food) {
    console.log(`Some of the ${food}`)
  }
  speak(noise) {
    alert(`The quail named ${this.constructor.name} says ${noise}!`)
  }
}