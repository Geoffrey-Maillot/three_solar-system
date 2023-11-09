import { Group, MathUtils } from "three";

import { Planet, Updatable } from "@interface";
import { createMercury } from "./mesh";
import { planetInfo } from "@constants";

class Mercury extends Group {
  name: Planet = "mercury";
  updatables: Array<Updatable>;
  mercuryPlanet: Awaited<ReturnType<typeof createMercury>> | null = null;
  constructor(updatables: Array<Updatable>) {
    super();
    this.updatables = updatables;

    this.updatables.push(this.rotateGroup, this.rotatePlanet);
  }

  rotatePlanet: Updatable = ({ delta }) => {
    this.rotation.y +=
      MathUtils.degToRad(planetInfo.mercury.selfRotation) * delta;
  };

  rotateGroup: Updatable = ({ delta }) => {
    if (this.mercuryPlanet) {
      this.mercuryPlanet.rotation.x =
        MathUtils.degToRad(planetInfo.mercury.sunAxisRotation) * delta;
    }
  };

  public async init() {
    const mercury = await createMercury();
    this.mercuryPlanet = mercury;
    this.add(this.mercuryPlanet);
  }
}

export { Mercury };
