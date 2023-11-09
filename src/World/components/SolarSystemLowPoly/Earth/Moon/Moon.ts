import { Group, MathUtils } from "three";
import { loadMoonPlanet } from "./loadMoon";
import type { Updatable } from "@interface";
import { moonInfo } from "@constants";

class Moon extends Group {
  name = "Moon";
  updatables: Array<Updatable>;
  moonPlanet: Awaited<ReturnType<typeof loadMoonPlanet>> | null = null;

  constructor(updatables: Array<Updatable>) {
    super();
    this.updatables = updatables;

    updatables.push(this.rotateMoon, this.rotateMoonPlanet);
  }

  rotateMoon: Updatable = ({ delta }) => {
    if (this.moonPlanet) {
      this.moonPlanet.rotation.y +=
        MathUtils.degToRad(moonInfo.selfRotation) * delta;
    }
  };

  rotateMoonPlanet: Updatable = ({ delta }) => {
    this.rotation.y += MathUtils.degToRad(moonInfo.earthAxisRotation) * delta;
  };

  public async init() {
    const moon = await loadMoonPlanet();
    this.moonPlanet = moon;

    this.add(this.moonPlanet);
  }
}

export { Moon };
