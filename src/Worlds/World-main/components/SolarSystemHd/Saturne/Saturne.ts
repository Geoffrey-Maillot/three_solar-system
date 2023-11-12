import { Group, MathUtils } from "three";
import { Planet, Updatable } from "@interface";
import { createSaturne } from "./meshs";
import { planetInfo } from "@constants";

class Saturne extends Group {
  name: Planet = "saturne";
  updatables: Array<Updatable>;
  saturnePlanet: Awaited<ReturnType<typeof createSaturne>> | null = null;

  constructor(updatables: Array<Updatable>) {
    super();
    this.updatables = updatables;
    this.updatables.push(this.rotateGroup, this.rotatePlanet);
  }

  rotatePlanet: Updatable = ({ delta }) => {
    this.rotation.y += MathUtils.degToRad(planetInfo.saturne.selfRotation) * delta;
  };

  rotateGroup: Updatable = ({ delta }) => {
    if (this.saturnePlanet) {
      this.saturnePlanet.rotation.x =
        MathUtils.degToRad(planetInfo.saturne.sunAxisRotation) * delta;
    }
  };

  public async init() {
    const saturne = await createSaturne();
    this.saturnePlanet = saturne;
    this.add(this.saturnePlanet);
  }
}

export { Saturne };
