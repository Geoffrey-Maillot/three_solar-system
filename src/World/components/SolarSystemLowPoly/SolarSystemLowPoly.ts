import {AmbientLight, Group} from 'three'
import { Updatable } from '../../../interface'

import { Sun } from './Sun/Sun'
import {createLight} from './light'


class SolarSystemLowPoly extends Group {
  updatables: Array<Updatable>
  sun: Sun
  universeLight: AmbientLight
  constructor(updatables: Array<Updatable>) {
  super()
  this.updatables =updatables
  this.sun = new Sun(this.updatables)
  this.universeLight = createLight()

  this.add(this.universeLight)
}

    async init() {
    await this.sun.init()
    this.add(this.sun)
}
}

export {SolarSystemLowPoly}