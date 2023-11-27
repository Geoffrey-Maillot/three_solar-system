import { Group } from "three";
import { createJupiter } from "./mesh";
import { planetInfo } from "@constants";
import gsap from "gsap";
import { AddCamera } from "@interface";

class Jupiter extends Group {
  jupiterPlanet: Awaited<ReturnType<typeof createJupiter>> | null = null;
  rotateJupiterPlanet: gsap.core.Tween | null = null;
  rotateJupiter: gsap.core.Tween | null = null;

  constructor(addCamera: AddCamera) {
    super();
  }

  public async init() {
    const jupiter = await createJupiter();
    this.jupiterPlanet = jupiter;
    this.add(this.jupiterPlanet);

    this.animateJupiterPlanet();
    this.animateJupiter();
  }

  private animateJupiterPlanet = () => {
    if (this.jupiterPlanet) {
      this.rotateJupiterPlanet = gsap.to(this.jupiterPlanet.rotation, {
        duration: planetInfo.jupiter.selfRotation,
        y: Math.PI * 2,
        repeat: -1,
        ease: "none",
      });
    }
  };

  private animateJupiter = () => {
    this.rotateJupiter = gsap.to(this.rotation, {
      duration: planetInfo.jupiter.sunAxisRotation,
      y: Math.PI * 2,
      repeat: -1,
      ease: "none",
    });
  };

  public resumeJupiterRotation() {
    this.rotateJupiter?.resume();
    this.rotateJupiterPlanet?.resume();
  }

  public stopJupiterRotation() {
    this.rotateJupiter?.pause();
    this.rotateJupiterPlanet?.pause();
  }
}

export { Jupiter };
