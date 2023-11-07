import { Group, MathUtils } from "three";

import {loadSun} from './loadSun'

import type { Updatable } from "../../../../interface";

class Sun extends Group {
  updatables: Array<Updatable>;
  sun: Awaited<ReturnType<typeof loadSun>> | null = null

  constructor(updatables: Array<Updatable>) {
    super();
    this.updatables = updatables;
    this.updatables.push(this.rotateSun)
  }

   rotateSun: Updatable = ({delta}) => {
    this.rotation.y += MathUtils.degToRad(5) * delta
}

  public async init () {
      const sun =  await loadSun()
      this.sun = sun
      this.add(this.sun)
}
}

export { Sun }