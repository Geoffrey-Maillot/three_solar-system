import { Group, MathUtils } from "three";
import { Planet, Updatable } from "@interface";
import { createJupiter } from "./mesh";
import { planetInfo } from "@constants";

class Jupiter extends Group {
  name: Planet = "jupiter";
  updatables: Array<Updatable>;
  jupiterPlanet: Awaited<ReturnType<typeof createJupiter>> | null = null;

  constructor(updatables: Array<Updatable>) {
    super();
    this.updatables = updatables;
    this.updatables.push(this.rotateGroup, this.rotatePlanet);
  }

  rotatePlanet: Updatable = ({ delta }) => {
    this.rotation.y +=
      MathUtils.degToRad(planetInfo.jupiter.selfRotation) * delta;
  };

  rotateGroup: Updatable = ({ delta }) => {
    if (this.jupiterPlanet) {
      this.jupiterPlanet.rotation.x =
        MathUtils.degToRad(planetInfo.jupiter.sunAxisRotation) * delta;
    }
  };

  public async init() {
    const jupiter = await createJupiter();
    this.jupiterPlanet = jupiter;
    this.add(this.jupiterPlanet);
  }
}

export { Jupiter };
