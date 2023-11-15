import { Group } from "three";
import { Planet } from "@interface";
import { createJupiter } from "./mesh";
import { planetInfo } from "@constants";
import gsap from "gsap";

class Jupiter extends Group {
  name: Planet = "jupiter";
  jupiterPlanet: Awaited<ReturnType<typeof createJupiter>> | null = null;
  rotateJupiterPlanet: gsap.core.Tween | null = null;
  rotateJupiter: gsap.core.Tween | null = null;

  constructor() {
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
