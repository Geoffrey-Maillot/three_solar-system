import { Group, MathUtils } from "three";
import { loadUranusPlanet } from "./loadUranus";
import type { Updatable } from "@interface";
import { planetInfo } from "@constants";

class Uranus extends Group {
  updatables: Array<Updatable>;
  uranusPlanet: Awaited<ReturnType<typeof loadUranusPlanet>> | null = null;

  constructor(updatables: Array<Updatable>) {
    super();
    this.updatables = updatables;

    updatables.push(this.rotateUranus, this.rotateUranusPlanet);
  }

  rotateUranus: Updatable = ({ delta }) => {
    if (this.uranusPlanet) {
      this.uranusPlanet.rotation.y +=
        MathUtils.degToRad(planetInfo.uranus.sunAxisRotation) * delta;
    }
  };

  rotateUranusPlanet: Updatable = ({ delta }) => {
    this.rotation.y +=
      MathUtils.degToRad(planetInfo.uranus.selfRotation) * delta;
  };

  public async init() {
    const uranus = await loadUranusPlanet();
    this.uranusPlanet = uranus;
    this.add(this.uranusPlanet);
  }
}

export { Uranus };
