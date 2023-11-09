import { Group, MathUtils } from "three";

import { Updatable } from "@interface";
import { createMoon } from "./mesh";
import { moonInfo } from "@constants";

class Moon extends Group {
  name = "moon";
  updatables: Array<Updatable>;
  moonPlanet: Awaited<ReturnType<typeof createMoon>> | null = null;
  constructor(updatables: Array<Updatable>) {
    super();
    this.updatables = updatables;

    this.updatables.push(this.rotateGroup, this.rotatePlanet);
  }

  rotatePlanet: Updatable = ({ delta }) => {
    this.rotation.y += MathUtils.degToRad(moonInfo.earthAxisRotation) * delta;
  };

  rotateGroup: Updatable = ({ delta }) => {
    if (this.moonPlanet) {
      this.moonPlanet.rotation.y +=
        MathUtils.degToRad(moonInfo.selfRotation) * delta;
    }
  };

  public async init() {
    const moon = await createMoon();
    this.moonPlanet = moon;
    this.add(this.moonPlanet);
  }
}

export { Moon };
