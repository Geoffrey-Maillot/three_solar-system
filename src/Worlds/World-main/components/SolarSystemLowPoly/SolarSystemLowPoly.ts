import { Group } from "three";
import type { Updatable, SolarSystemName } from "@interface";

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

    this.sun = new Sun();
    this.mercury = new Mercury();
    this.venus = new Venus();
    this.earth = new Earth();
    this.mars = new Mars();
    this.jupiter = new Jupiter();
    this.saturne = new Saturne();
    this.uranus = new Uranus();
    this.neptune = new Neptune();
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

  public stopSolarSystem() {
    this.sun.stopSunAnimation();
    this.earth.stopEarthAnimation();
    this.jupiter.stopJupiterRotation();
    this.mars.stopMarsotation();
    this.mercury.stopMercuryRotation();
    this.neptune.stopNeptuneRotation();
    this.saturne.stopSaturneRotation();
    this.venus.stopVenusRotation();
    this.uranus.stopUranusRotation();
  }

  public startSolarSystem() {
    this.sun.resumeSunAnimation();
    this.earth.resumeEarthAnimation();
    this.jupiter.resumeJupiterRotation();
    this.mars.resumeMarsRotation();
    this.mercury.resumeMercuryRotation();
    this.neptune.resumeNeptuneRotation();
    this.saturne.resumeSaturneRotation();
    this.venus.resumeVenusRotation();
    this.uranus.resumeUranusRotation();
  }
}

export { SolarSystemLowPoly };
