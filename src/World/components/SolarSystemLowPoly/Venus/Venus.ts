import { Group, MathUtils } from 'three';

  import {loadVenusPlanet} from './loadVenus'

import type { Updatable } from "../../../../interface";


class Venus extends Group {
  updatables: Array<Updatable>;
  venusPlanet: Awaited<ReturnType<typeof loadVenusPlanet>> | null = null

  constructor (updatables: Array<Updatable>) {
  super()
  this.updatables = updatables


  updatables.push(this.rotateVenus, this.rotateVenusPlanet)
}

  rotateVenus: Updatable = ({delta}) => {
  if (this.venusPlanet) {
  this.venusPlanet.rotation.y += MathUtils.degToRad(18) * delta
}
}

  rotateVenusPlanet: Updatable = ({delta}) => {
  this.rotation.y += MathUtils.degToRad(25) * delta
}

  public async init() {
    const venus = await loadVenusPlanet()
    this.venusPlanet = venus

    this.add(this.venusPlanet)
  }
}

export{Venus}