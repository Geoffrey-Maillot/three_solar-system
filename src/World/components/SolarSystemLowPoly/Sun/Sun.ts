import { Object3DEventMap, PointLight, Group, Object3D } from "three";

import {loadSun} from './loadSun'

import { Updatable } from "../../../../interface";
import { createLight } from "./light";

class Sun extends Group {
  updatables: Array<Updatable>;
  sun: Object3D<Object3DEventMap> | null = null
  light: PointLight
  constructor(updatables: Array<Updatable>) {
    super();
    this.updatables = updatables;
    this.light = createLight()
    this.add(this.light)
  }

  public async init () {
      const {sun} =  await loadSun()
      this.sun = sun
      this.add(this.sun)
}
}

export { Sun }