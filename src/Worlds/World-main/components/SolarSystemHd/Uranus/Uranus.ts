import { Group, MathUtils } from "three";
import { Planet, Updatable } from "@interface";
import { createUranus } from "./mesh";
import { planetInfo } from "@constants";

class Uranus extends Group {
  name: Planet = "uranus";
  updatables: Array<Updatable>;
  uranusPlanet: Awaited<ReturnType<typeof createUranus>> | null = null;

  constructor(updatables: Array<Updatable>) {
    super();
    this.updatables = updatables;
    this.updatables.push(this.rotateGroup, this.rotatePlanet);
  }

  rotatePlanet: Updatable = ({ delta }) => {
    this.rotation.y +=
      MathUtils.degToRad(planetInfo.uranus.selfRotation) * delta;
  };

  rotateGroup: Updatable = ({ delta }) => {
    if (this.uranusPlanet) {
      this.uranusPlanet.rotation.x =
        MathUtils.degToRad(planetInfo.uranus.sunAxisRotation) * delta;
    }
  };

  public async init() {
    const uranus = await createUranus();
    this.uranusPlanet = uranus;
    this.add(this.uranusPlanet);
  }
}

export { Uranus };
