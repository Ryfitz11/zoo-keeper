export default class Newt {
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
    alert(`The newt named ${this.constructor.name} says ${noise}!`)
  }
}