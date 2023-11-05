import { Mesh, MeshPhongMaterial, Object3DEventMap, PointLight, SphereGeometry, Group } from "three";


import { createSun } from './mesh'
import {createLight} from './light'

import { Updatable } from "../../../../interface";

class Sun extends Group {
  updatables: Array<Updatable>;
  sun:  Mesh<SphereGeometry, MeshPhongMaterial, Object3DEventMap> | null = null
  light: PointLight
  constructor(updatables: Array<Updatable>) {
    super();
    this.updatables = updatables;
    this.light = createLight()
    this.add(this.light)
  }

  public async init () {
      const {sun} =  await createSun()
      this.sun = sun
      this.add(this.sun)
}
}

export { Sun }