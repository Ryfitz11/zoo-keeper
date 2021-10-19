export default class Zebra {
  constructor(name, weightKg, gender, toothLengthMm) {
    this.name = name
    this.weightKg = weightKg
    this.gender = gender
    this.toothLengthMm = toothLengthMm
  }
  eat(food) {
    console.log(`All of the ${food}`)
  }
  speak(noise) {
    alert(`The zebra named ${this.constructor.name} says ${noise}!`)
  }
}