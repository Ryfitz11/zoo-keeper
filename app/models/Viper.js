export default class Viper {
  constructor(name, weightKg, gender, lengthMeter) {
    this.name = name
    this.weightKg = weightKg
    this.gender = gender
    this.lengthMeter = lengthMeter
  }
  eat(food) {
    console.log(`All of the ${food}`)
  }
  speak(noise) {
    alert(`The viper named ${this.constructor.name} says ${noise}!`)
  }
}
