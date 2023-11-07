import { Group, MathUtils } from 'three';

  import {loadMoonPlanet} from './loadMoon'

import type { Updatable } from "../../../../../interface";


class Moon extends Group {
  updatables: Array<Updatable>;
  moonPlanet: Awaited<ReturnType<typeof loadMoonPlanet>> | null = null

  constructor (updatables: Array<Updatable>) {
  super()
  this.updatables = updatables


  updatables.push(this.rotateMoon, this.rotateMoonPlanet)
}

  rotateMoon: Updatable = ({delta}) => {
  if (this.moonPlanet) {
  this.moonPlanet.rotation.y += MathUtils.degToRad(18) * delta
}
}

  rotateMoonPlanet: Updatable = ({delta}) => {
  this.rotation.y += MathUtils.degToRad(60) * delta
}

  public async init() {
    const moon = await loadMoonPlanet()
    this.moonPlanet = moon

    this.add(this.moonPlanet)
  }
}

export{Moon}