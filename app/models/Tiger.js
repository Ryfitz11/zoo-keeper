export default class Tiger {
  constructor(name, weightKg, gender, toothLengthMm) {
    this.name = name
    this.weightKg = weightKg
    this.gender = gender
    this.toothLengthMm = toothLengthMm
  }
  eat(food) {
    console.log(`Most of the ${food}`)
  }
  speak(noise) {
    alert(`The tiger named ${this.constructor.name} says ${noise}!`)
  }
}