export default class Alligator {
  constructor(name, weightKg, gender, toothLengthMm) {
    this.name = name
    this.weightKg = weightKg
    this.gender = gender
    this.toothLengthMm = toothLengthMm
  }
  eat(food) {
    console.log(`All the ${food}`)
  }
  speak(noise) {
    alert(`The ${this.constructor.name} says ${noise}!`)
  }
}
