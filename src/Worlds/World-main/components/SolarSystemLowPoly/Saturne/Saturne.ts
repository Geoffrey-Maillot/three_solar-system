import { Group, MathUtils } from "three";
import { loadSaturnePlanet } from "./loadSaturne";
import type { Updatable } from "@interface";
import { planetInfo } from "@constants";

class Saturne extends Group {
  updatables: Array<Updatable>;
  SaturnePlanet: Awaited<ReturnType<typeof loadSaturnePlanet>> | null = null;

  constructor(updatables: Array<Updatable>) {
    super();
    this.updatables = updatables;

    updatables.push(this.rotateSaturne, this.rotateSaturnePlanet);
  }

  rotateSaturne: Updatable = ({ delta }) => {
    if (this.SaturnePlanet) {
      this.SaturnePlanet.rotation.y +=
        MathUtils.degToRad(planetInfo.saturne.sunAxisRotation) * delta;
    }
  };

  rotateSaturnePlanet: Updatable = ({ delta }) => {
    this.rotation.y +=
      MathUtils.degToRad(planetInfo.saturne.selfRotation) * delta;
  };

  public async init() {
    const Saturne = await loadSaturnePlanet();
    this.SaturnePlanet = Saturne;
    this.add(this.SaturnePlanet);
  }
}

export { Saturne };
