import {Group} from 'three'
import { Updatable } from '../../../interface'
import { Sun } from './Sun/Sun'


class SolarSystem extends Group {
  updatables: Array<Updatable>
  sun: Sun
  constructor(updatables: Array<Updatable>) {
  super()
  this.updatables =updatables
  this.sun = new Sun(this.updatables)
}

    async init() {
    await this.sun.init()
    this.add(this.sun)
}
}

export {SolarSystem}