import { Group } from "three";
import { loadSun } from "./loadSun";
import { planetInfo } from "@constants";

import gsap from "gsap";

class Sun extends Group {
  sun: Awaited<ReturnType<typeof loadSun>> | null = null;
  rotateSun: gsap.core.Tween | null = null;
  constructor() {
    super();
  }

  public async init() {
    const sun = await loadSun();
    this.sun = sun;
    this.add(this.sun);
    this.animateSun();
  }

  private animateSun = () => {
    this.rotateSun = gsap.to(this.rotation, {
      duration: planetInfo.sun.selfRotation,
      y: Math.PI * 2,
      repeat: -1,
      ease: "none",
    });
  };

  public resumeSunAnimation() {
    this.rotateSun?.resume();
  }

  public stopSunAnimation() {
    this.rotateSun?.pause();
  }
}

export { Sun };
