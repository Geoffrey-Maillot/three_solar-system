import { Group, MathUtils } from "three";
import { loadSun } from "./loadSun";
import type { Planet, Updatable } from "@interface";
import { planetInfo } from "@constants";

class Sun extends Group {
  name: Planet = "sun";
  updatables: Array<Updatable>;
  sun: Awaited<ReturnType<typeof loadSun>> | null = null;

  constructor(updatables: Array<Updatable>) {
    super();
    this.updatables = updatables;
    this.updatables.push(this.rotate);
  }

  rotate: Updatable = ({ delta }) => {
    this.rotation.y += MathUtils.degToRad(planetInfo.sun.selfRotation) * delta;
  };

  public async init() {
    const sun = await loadSun();
    this.sun = sun;
    this.add(this.sun);
  }
}

export { Sun };
