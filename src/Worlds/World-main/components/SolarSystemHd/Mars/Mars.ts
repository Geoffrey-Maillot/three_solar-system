import { Group, MathUtils } from "three";
import { Planet, Updatable } from "@interface";
import { createMars } from "./mesh";
import { planetInfo } from "@constants";

class Mars extends Group {
  name: Planet = "mars";
  updatables: Array<Updatable>;
  marsPlanet: Awaited<ReturnType<typeof createMars>> | null = null;

  constructor(updatables: Array<Updatable>) {
    super();
    this.updatables = updatables;
    this.updatables.push(this.rotateGroup, this.rotatePlanet);
  }

  rotatePlanet: Updatable = ({ delta }) => {
    this.rotation.y += MathUtils.degToRad(planetInfo.mars.selfRotation) * delta;
  };

  rotateGroup: Updatable = ({ delta }) => {
    if (this.marsPlanet) {
      this.marsPlanet.rotation.x =
        MathUtils.degToRad(planetInfo.mars.sunAxisRotation) * delta;
    }
  };

  public async init() {
    const mars = await createMars();
    this.marsPlanet = mars;
    this.add(this.marsPlanet);
  }
}

export { Mars };
