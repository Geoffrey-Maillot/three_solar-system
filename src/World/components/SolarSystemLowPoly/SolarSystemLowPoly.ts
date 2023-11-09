import { Group } from "three";
import type { Updatable, SolarSystemName } from "../../../interface";

import { createLight } from "./lights";

import { Sun } from "./Sun/Sun";
import { Mercury } from "./Mercury/Mercury";
import { Jupiter } from "./Jupiter/Jupiter";
import { Venus } from "./Venus/Venus";
import { Earth } from "./Earth/Earth";
import { Mars } from "./Mars/Mars";
import { Saturne } from "./Saturne/Saturne";
import { Uranus } from "./Uranus/Uranus";
import { Neptune } from "./Neptune/Neptune";

class SolarSystemLowPoly extends Group {
  name: SolarSystemName = "solarSystemLowPoly";
  updatables: Array<Updatable>;
  lights: ReturnType<typeof createLight>;
  sun: Sun;
  mercury: Mercury;
  venus: Venus;
  earth: Earth;
  mars: Mars;
  jupiter: Jupiter;
  saturne: Saturne;
  uranus: Uranus;
  neptune: Neptune;

  constructor(updatables: Array<Updatable>) {
    super();
    this.updatables = updatables;

    this.lights = createLight();
    this.add(
      this.lights.hemisphereLight,
      this.lights.universeLightLeft,
      this.lights.universeLightRight,
    );

    this.sun = new Sun(this.updatables);
    this.mercury = new Mercury(this.updatables);
    this.venus = new Venus(this.updatables);
    this.earth = new Earth(this.updatables);
    this.mars = new Mars(this.updatables);
    this.jupiter = new Jupiter(this.updatables);
    this.saturne = new Saturne(this.updatables);
    this.uranus = new Uranus(this.updatables);
    this.neptune = new Neptune(this.updatables);
  }

  async init() {
    await this.sun.init();
    await this.venus.init();
    await this.mercury.init();
    await this.earth.init();
    await this.mars.init();
    await this.jupiter.init();
    await this.saturne.init();
    await this.uranus.init();
    await this.neptune.init();
    this.add(
      this.sun,
      this.venus,
      this.mercury,
      this.earth,
      this.mars,
      this.jupiter,
      this.saturne,
      this.uranus,
      this.neptune,
    );
  }
}

export { SolarSystemLowPoly };
