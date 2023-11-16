import { Group } from "three";
import { loadMercuryPlanet } from "./loadMercury";
import type { Planet } from "@interface";
import { planetInfo } from "@constants";
import gsap from "gsap";

class Mercury extends Group {
  name: Planet = "mercury";
  mercuryPlanet: Awaited<ReturnType<typeof loadMercuryPlanet>> | null = null;
  rotateMercuryPlanet: gsap.core.Tween | null = null;
  rotateMercury: gsap.core.Tween | null = null;

  constructor() {
    super();
  }
  public async init() {
    const mercury = await loadMercuryPlanet();
    this.mercuryPlanet = mercury;
    this.add(this.mercuryPlanet);

    this.animateMercuryPlanet();
    this.animateMercury();
  }

  private animateMercuryPlanet = () => {
    if (this.mercuryPlanet) {
      this.rotateMercuryPlanet = gsap.to(this.mercuryPlanet.rotation, {
        duration: planetInfo.mercury.selfRotation,
        y: Math.PI * 2,
        repeat: -1,
        ease: "none",
      });
    }
  };

  private animateMercury = () => {
    this.rotateMercury = gsap.to(this.rotation, {
      duration: planetInfo.mercury.sunAxisRotation,
      y: Math.PI * 2,
      repeat: -1,
      ease: "none",
    });
  };

  public resumeMercuryRotation() {
    this.rotateMercury?.resume();
    this.rotateMercuryPlanet?.resume();
  }

  public stopMercuryRotation() {
    this.rotateMercury?.pause();
    this.rotateMercuryPlanet?.pause();
  }
}

export { Mercury };
