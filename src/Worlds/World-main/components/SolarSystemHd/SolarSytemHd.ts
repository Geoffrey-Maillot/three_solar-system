import { Group } from "three";
import { createLight } from "./lights";
import { Updatable, SolarSystemName, AddCamera } from "@interface";
import { Sun } from "./Sun/Sun";
import { Mercury } from "./Mercury/Mercury";
import { Venus } from "./Venus/Venus";
import { Earth } from "./Earth/Earth";
import { Mars } from "./Mars/Mars";
import { Jupiter } from "./Jupiter/Jupiter";
import { Saturne } from "./Saturne/Saturne";
import { Uranus } from "./Uranus/Uranus";
import { Neptune } from "./Neptune/Neptune";

class SolarSystemHd extends Group {
  name: SolarSystemName = "solarSystemHd";
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

  constructor(updatables: Array<Updatable>, addCamera: AddCamera) {
    super();

    this.lights = createLight();
    this.add(this.lights.hemisphereLight);

    this.updatables = updatables;

    this.sun = new Sun(addCamera);
    this.mercury = new Mercury(addCamera);
    this.venus = new Venus(addCamera);
    this.earth = new Earth(addCamera);
    this.mars = new Mars(addCamera);
    this.jupiter = new Jupiter(addCamera);
    this.saturne = new Saturne(addCamera);
    this.uranus = new Uranus(addCamera);
    this.neptune = new Neptune(addCamera);
  }

  async init() {
    await this.sun.init();
    await this.mercury.init();
    await this.venus.init();
    await this.earth.init();
    await this.mars.init();
    await this.jupiter.init();
    await this.saturne.init();
    await this.uranus.init();
    await this.neptune.init();

    this.add(
      this.sun,
      this.mercury,
      this.venus,
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

export { SolarSystemHd };
