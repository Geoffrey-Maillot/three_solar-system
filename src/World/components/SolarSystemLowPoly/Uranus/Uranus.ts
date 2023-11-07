import {Group, MathUtils} from 'three'

  import {loadUranusPlanet} from './loadUranus'

import type { Updatable } from "../../../../interface";


class Uranus extends Group {
  updatables: Array<Updatable>;
  uranusPlanet: Awaited<ReturnType<typeof loadUranusPlanet>> | null = null

  constructor (updatables: Array<Updatable>) {
  super()
  this.updatables = updatables

  updatables.push(this.rotateUranus, this.rotateUranusPlanet)
}

  rotateUranus: Updatable = ({delta}) => {
  if (this.uranusPlanet) {
  this.uranusPlanet.rotation.y += MathUtils.degToRad(20) * delta
}
}

  rotateUranusPlanet: Updatable = ({delta}) => {
  this.rotation.y += MathUtils.degToRad(33) * delta
}

  public async init() {
    const uranus = await loadUranusPlanet()
    this.uranusPlanet = uranus
    this.add(this.uranusPlanet)
  }
}

export{Uranus}