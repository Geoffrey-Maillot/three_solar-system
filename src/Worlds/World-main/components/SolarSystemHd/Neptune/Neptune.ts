import { Group, MathUtils } from "three";
import { Planet, Updatable } from "@interface";
import { createNeptune } from "./mesh";
import { planetInfo } from "@constants";

class Neptune extends Group {
  name: Planet = "neptune";
  updatables: Array<Updatable>;
  neptunePlanet: Awaited<ReturnType<typeof createNeptune>> | null = null;

  constructor(updatables: Array<Updatable>) {
    super();
    this.updatables = updatables;
    this.updatables.push(this.rotateGroup, this.rotatePlanet);
  }

  rotatePlanet: Updatable = ({ delta }) => {
    this.rotation.y += MathUtils.degToRad(planetInfo.neptune.selfRotation) * delta;
  };

  rotateGroup: Updatable = ({ delta }) => {
    if (this.neptunePlanet) {
      this.neptunePlanet.rotation.x =
        MathUtils.degToRad(planetInfo.neptune.sunAxisRotation) * delta;
    }
  };

  public async init() {
    const neptune = await createNeptune();
    this.neptunePlanet = neptune;
    this.add(this.neptunePlanet);
  }
}

export { Neptune };
