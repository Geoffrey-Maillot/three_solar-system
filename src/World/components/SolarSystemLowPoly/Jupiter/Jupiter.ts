import { Group, MathUtils } from "three";
import { loadJupiterPlanet } from "./loadJupiter";
import type { Updatable } from "@interface";
import { planetInfo } from "@constants";

class Jupiter extends Group {
  updatables: Array<Updatable>;
  jupiterPlanet: Awaited<ReturnType<typeof loadJupiterPlanet>> | null = null;

  constructor(updatables: Array<Updatable>) {
    super();
    this.updatables = updatables;

    updatables.push(this.rotateJupiter, this.rotateJupiterPlanet);
  }

  rotateJupiter: Updatable = ({ delta }) => {
    if (this.jupiterPlanet) {
      this.jupiterPlanet.rotation.y +=
        MathUtils.degToRad(planetInfo.jupiter.sunAxisRotation) * delta;
    }
  };

  rotateJupiterPlanet: Updatable = ({ delta }) => {
    this.rotation.y +=
      MathUtils.degToRad(planetInfo.jupiter.selfRotation) * delta;
  };

  public async init() {
    const jupiter = await loadJupiterPlanet();
    this.jupiterPlanet = jupiter;
    this.add(this.jupiterPlanet);
  }
}

export { Jupiter };
