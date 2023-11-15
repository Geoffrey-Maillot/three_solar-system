import { Group } from "three";
import { Planet } from "@interface";
import { createNeptune } from "./mesh";
import { planetInfo } from "@constants";
import gsap from "gsap";

class Neptune extends Group {
  name: Planet = "neptune";
  neptunePlanet: Awaited<ReturnType<typeof createNeptune>> | null = null;
  rotateNeptunePlanet: gsap.core.Tween | null = null;
  rotateNeptune: gsap.core.Tween | null = null;

  constructor() {
    super();
  }

  public async init() {
    const neptune = await createNeptune();
    this.neptunePlanet = neptune;
    this.add(this.neptunePlanet);

    this.animateNeptunePlanet();
    this.animateNeptune();
  }
  private animateNeptunePlanet = () => {
    if (this.neptunePlanet) {
      this.rotateNeptunePlanet = gsap.to(this.neptunePlanet.rotation, {
        duration: planetInfo.neptune.selfRotation,
        y: Math.PI * 2,
        repeat: -1,
        ease: "none",
      });
    }
  };

  private animateNeptune = () => {
    this.rotateNeptune = gsap.to(this.rotation, {
      duration: planetInfo.neptune.sunAxisRotation,
      y: Math.PI * 2,
      repeat: -1,
      ease: "none",
    });
  };

  public resumeNeptuneRotation() {
    this.rotateNeptune?.resume();
    this.rotateNeptunePlanet?.resume();
  }

  public stopNeptuneRotation() {
    this.rotateNeptune?.pause();
    this.rotateNeptunePlanet?.pause();
  }
}

export { Neptune };
