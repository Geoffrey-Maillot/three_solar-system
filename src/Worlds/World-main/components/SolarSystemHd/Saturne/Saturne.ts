import { Group } from "three";
import { Planet } from "@interface";
import { createSaturne } from "./meshs";
import { planetInfo } from "@constants";
import gsap from "gsap";

class Saturne extends Group {
  saturnePlanet: Awaited<ReturnType<typeof createSaturne>> | null = null;
  rotateSaturnePlanet: gsap.core.Tween | null = null;
  rotateSaturne: gsap.core.Tween | null = null;

  constructor() {
    super();
  }

  public async init() {
    const saturne = await createSaturne();
    this.saturnePlanet = saturne;
    this.add(this.saturnePlanet);

    this.animateSaturnePlanet();
    this.animateSaturne();
  }

  private animateSaturnePlanet = () => {
    if (this.saturnePlanet) {
      this.rotateSaturnePlanet = gsap.to(this.saturnePlanet.rotation, {
        duration: planetInfo.saturne.selfRotation,
        y: Math.PI * 2,
        repeat: -1,
        ease: "none",
      });
    }
  };

  private animateSaturne = () => {
    this.rotateSaturne = gsap.to(this.rotation, {
      duration: planetInfo.saturne.sunAxisRotation,
      y: Math.PI * 2,
      repeat: -1,
      ease: "none",
    });
  };

  public resumeSaturneRotation() {
    this.rotateSaturne?.resume();
    this.rotateSaturnePlanet?.resume();
  }

  public stopSaturneRotation() {
    this.rotateSaturne?.pause();
    this.rotateSaturnePlanet?.pause();
  }
}

export { Saturne };
