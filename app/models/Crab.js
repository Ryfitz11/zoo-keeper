export default class Crab {
  constructor(name, weightKg, gender, color) {
    this.name = name
    this.weightKg = weightKg
    this.gender = gender
    this.color = color
  }
  eat(food) {
    console.log(`A bit of ${food}`)
  }
  speak(noise) {
    alert(`The ${this.constructor.name} says ${noise}!`)
  }
}
