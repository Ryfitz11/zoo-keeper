export default class Monkey {
  constructor(name, weightKg, gender, toothLengthMm) {
    this.name = name
    this.weightKg = weightKg
    this.gender = gender
    this.toothLengthMm = toothLengthMm
  }
  eat(food) {
    console.log(`Some of the ${food}`)
  }
  speak(noise) {
    alert(`The monkey named ${this.constructor.name} says ${noise}!`)
  }
}