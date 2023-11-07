import {Group, MathUtils} from 'three'

  import {loadMercuryPlanet} from './loadMercury'

import type { Updatable } from "../../../../interface";


class Mercury extends Group {
  updatables: Array<Updatable>;
  mercuryPlanet: Awaited<ReturnType<typeof loadMercuryPlanet>> | null = null

  constructor (updatables: Array<Updatable>) {
  super()
  this.updatables = updatables

  updatables.push(this.rotateMercury, this.rotateMercuryPlanet)
}

  rotateMercury: Updatable = ({delta}) => {
  if (this.mercuryPlanet) {
  this.mercuryPlanet.rotation.y += MathUtils.degToRad(40) * delta
}
}

  rotateMercuryPlanet: Updatable = ({delta}) => {
  this.rotation.y += MathUtils.degToRad(40) * delta
}

  public async init() {
    const mercury = await loadMercuryPlanet()
    this.mercuryPlanet = mercury
    this.add(this.mercuryPlanet)
  }
}

export{Mercury}