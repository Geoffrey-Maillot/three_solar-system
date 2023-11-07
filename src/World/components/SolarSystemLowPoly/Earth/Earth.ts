import { Group, MathUtils } from 'three';

import type { Updatable } from "../../../../interface";
import {loadEarthPlanet} from './loadEarth'
import {Moon} from './Moon/Moon'



class Earth extends Group {
  updatables: Array<Updatable>;
  earthPlanet: Awaited<ReturnType<typeof loadEarthPlanet>> | null = null
  moon : Moon

  constructor (updatables: Array<Updatable>) {
  super()
  this.updatables = updatables
  this.moon = new Moon(this.updatables)

  updatables.push(this.rotateEarth, this.rotateEarthPlanet)
}

  rotateEarth: Updatable = ({delta}) => {
  if (this.earthPlanet) {
  this.earthPlanet.rotation.y += MathUtils.degToRad(18) * delta
}
}

  rotateEarthPlanet: Updatable = ({delta}) => {
  this.rotation.y += MathUtils.degToRad(30) * delta
}

  public async init() {
    const earth = await loadEarthPlanet()
    await this.moon.init()
    earth.add(this.moon)
    this.earthPlanet = earth
    this.add(this.earthPlanet)
  }
}

export{Earth}