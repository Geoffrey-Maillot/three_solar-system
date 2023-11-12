import { Group, MathUtils } from "three";
import { loadNeptunePlanet } from "./loadNeptune";
import type { Updatable } from "@interface";
import { planetInfo } from "@constants";

class Neptune extends Group {
  updatables: Array<Updatable>;
  neptunePlanet: Awaited<ReturnType<typeof loadNeptunePlanet>> | null = null;

  constructor(updatables: Array<Updatable>) {
    super();
    this.updatables = updatables;

    updatables.push(this.rotateNeptune, this.rotateNeptunePlanet);
  }

  rotateNeptune: Updatable = ({ delta }) => {
    if (this.neptunePlanet) {
      this.neptunePlanet.rotation.y +=
        MathUtils.degToRad(planetInfo.neptune.sunAxisRotation) * delta;
    }
  };

  rotateNeptunePlanet: Updatable = ({ delta }) => {
    this.rotation.y +=
      MathUtils.degToRad(planetInfo.neptune.selfRotation) * delta;
  };

  public async init() {
    const neptune = await loadNeptunePlanet();
    this.neptunePlanet = neptune;
    this.add(this.neptunePlanet);
  }
}

export { Neptune };
