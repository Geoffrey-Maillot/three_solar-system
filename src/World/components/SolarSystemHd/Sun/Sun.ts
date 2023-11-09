import {
  Mesh,
  MeshPhongMaterial,
  Object3DEventMap,
  PointLight,
  SphereGeometry,
  Group,
  MathUtils,
} from "three";

import { createSun } from "./mesh";
import { createLight } from "./light";

import { Planet, Updatable } from "@interface";

import { planetInfo } from "@constants";

class Sun extends Group {
  name: Planet = "sun";
  updatables: Array<Updatable>;
  sun: Mesh<SphereGeometry, MeshPhongMaterial, Object3DEventMap> | null = null;
  light: PointLight;
  constructor(updatables: Array<Updatable>) {
    super();
    this.updatables = updatables;
    this.light = createLight();
    this.add(this.light);

    updatables.push(this.rotateSun);
  }

  public async init() {
    const { sun } = await createSun();
    this.sun = sun;
    this.add(this.sun);
  }

  rotateSun: Updatable = ({ delta }) => {
    this.rotateY(MathUtils.degToRad(planetInfo.sun.selfRotation * delta));
  };
}

export { Sun };
