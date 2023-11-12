import { Group, MathUtils } from "three";

import { Planet, Updatable } from "@interface";
import { createVenus } from "./mesh";
import { planetInfo } from "@constants";

class Venus extends Group {
  name: Planet = "venus";
  updatables: Array<Updatable>;
  venusPlanet: Awaited<ReturnType<typeof createVenus>> | null = null;

  constructor(updatables: Array<Updatable>) {
    super();
    this.updatables = updatables;
    this.updatables.push(this.rotateGroup, this.rotatePlanet);
  }

  rotatePlanet: Updatable = ({ delta }) => {
    this.rotation.y +=
      MathUtils.degToRad(planetInfo.venus.selfRotation) * delta;
  };

  rotateGroup: Updatable = ({ delta }) => {
    if (this.venusPlanet) {
      this.venusPlanet.rotation.x =
        MathUtils.degToRad(planetInfo.venus.sunAxisRotation) * delta;
    }
  };

  public async init() {
    const venus = await createVenus();
    this.venusPlanet = venus;
    this.add(this.venusPlanet);
  }
}

export { Venus };
