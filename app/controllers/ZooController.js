import Alligator from "../models/Alligator.js"
import Beaver from "../models/Beaver.js"
import Crab from "../models/Crab.js"
import Dragon from "../models/Dragon.js"
import Eel from "../models/Eel.js"
import Ferret from "../models/Ferret.js"
import Grasshopper from "../models/Grasshopper.js"
import Horse from "../models/Horse.js"
import Iguana from "../models/Iguana.js"
import Jaguar from "../models/Jaguar.js"
import Kangaroo from "../models/Kangaroo.js"
import Lama from "../models/Lama.js"
import Monkey from "../models/Monkey.js"
import Newt from "../models/Newt.js"
import Octupus from "../models/Octupus.js"
import Platypus from "../models/Platypus.js"
import Quail from "../models/Quail.js"
import Racoon from "../models/Racoon.js"
import Seal from "../models/Seal.js"
import Tiger from "../models/Tiger.js"
import Unicorn from "../models/Unicorn.js"
import Viper from "../models/Viper.js"
import Walrus from "../models/Walrus.js"
import X from "../models/X.js"
import Yak from "../models/Yak.js"
import Zebra from "../models/Zebra.js"


function _draw() { }
let _zoo = {
  alligator: new Alligator("Alex", 100, "m", 33),
  beaver: new Beaver("Alex", 100, "m", 33),
  Crab: new Crab("Alex", 100, "m", 33),
  Dragon: new Dragon("Alex", 100, "m", 33),
  Eel: new Eel("Alex", 100, "m", 33),
  Ferret: new Ferret("Alex", 100, "m", 33),
  Grasshopper: new Grasshopper("Alex", 100, "m", 33),
  Horse: new Horse("Alex", 100, "m", 33),
  Iguana: new Iguana("Alex", 100, "m", 33),
  Jaguar: new Jaguar("Alex", 100, "m", 33),
  Kangaroo: new Kangaroo("Alex", 100, "m", 33),
  Lama: new Lama("Alex", 100, "m", 33),
  Monkey: new Monkey("Alex", 100, "m", 33),
  Newt: new Newt("Alex", 100, "m", 33),
  Octupus: new Octupus("Alex", 100, "m", 33),
  Platypus: new Platypus("Alex", 100, "m", 33),
  Quail: new Quail("Alex", 100, "m", 33),
  Racoon: new Racoon("Alex", 100, "m", 33),
  Seal: new Seal("Alex", 100, "m", 33),
  Tiger: new Tiger("Alex", 100, "m", 33),
  Unicorn: new Unicorn("Alex", 100, "m", 33),
  Viper: new Viper("Alex", 100, "m", 33),
  Walrus: new Walrus("Alex", 100, "m", 33),
  X: new X("Alex", 100, "m", 33),
  Yak: new Yak("Alex", 100, "m", 33),
  Zebra: new Zebra("Alex", 100, "m", 33),
}
export class ZooController {
  constructor() {
    console.log("hello this is ZooController", _zoo)
  }
}