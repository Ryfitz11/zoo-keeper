export default class X {
  constructor(name, weightKg, gender, lengthMeter) {
    this.name = name
    this.weightKg = weightKg
    this.gender = gender
    this.lengthMeter = lengthMeter
  }
  eat(food) {
    console.log(`none of the ${food}`)
  }
  speak(noise) {
    alert(`The x named ${this.constructor.name} says ${noise}!`)
  }
}