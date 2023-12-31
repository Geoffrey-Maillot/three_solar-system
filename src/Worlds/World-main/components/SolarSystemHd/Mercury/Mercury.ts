import { Group } from "three";
import { createMercury } from "./mesh";
import { planetInfo } from "@constants";
import gsap from "gsap";
import { AddCamera } from "@interface";

class Mercury extends Group {
  mercuryPlanet: Awaited<ReturnType<typeof createMercury>> | null = null;
  rotateMercuryPlanet: gsap.core.Tween | null = null;
  rotateMercury: gsap.core.Tween | null = null;
  constructor(addCamera: AddCamera) {
    super();
  }

  public async init() {
    const mercury = await createMercury();
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
