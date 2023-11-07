import {Group, MathUtils} from 'three'

  import {loadMarsPlanet} from './loadMars'

import type { Updatable } from "../../../../interface";


class Mars extends Group {
  updatables: Array<Updatable>;
  mercuryPlanet: Awaited<ReturnType<typeof loadMarsPlanet>> | null = null

  constructor (updatables: Array<Updatable>) {
  super()
  this.updatables = updatables

  updatables.push(this.rotateMars, this.rotateMarsPlanet)
}

  rotateMars: Updatable = ({delta}) => {
  if (this.mercuryPlanet) {
  this.mercuryPlanet.rotation.y += MathUtils.degToRad(20) * delta
}
}

  rotateMarsPlanet: Updatable = ({delta}) => {
  this.rotation.y += MathUtils.degToRad(37) * delta
}

  public async init() {
    const mercury = await loadMarsPlanet()
    this.mercuryPlanet = mercury
    this.add(this.mercuryPlanet)
  }
}

export{Mars}