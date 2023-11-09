import { Group, MathUtils } from "three";
import { Planet, Updatable } from "@interface";
import { createEarth } from "./mesh";
import { planetInfo } from "@constants";
import { Moon } from "./Moon/Moon";

class Earth extends Group {
  name: Planet = "earth";
  updatables: Array<Updatable>;
  earthPlanet: Awaited<ReturnType<typeof createEarth>> | null = null;
  moon: Moon;

  constructor(updatables: Array<Updatable>) {
    super();
    this.updatables = updatables;
    this.moon = new Moon(this.updatables);
    this.updatables.push(this.rotateGroup, this.rotatePlanet);
  }

  rotatePlanet: Updatable = ({ delta }) => {
    this.rotation.y +=
      MathUtils.degToRad(planetInfo.earth.selfRotation) * delta;
  };

  rotateGroup: Updatable = ({ delta }) => {
    if (this.earthPlanet) {
      this.earthPlanet.rotation.x =
        MathUtils.degToRad(planetInfo.earth.sunAxisRotation) * delta;
    }
  };

  public async init() {
    const earth = await createEarth();
    await this.moon.init();
    earth.add(this.moon);
    this.earthPlanet = earth;
    this.add(this.earthPlanet);
  }
}

export { Earth };
