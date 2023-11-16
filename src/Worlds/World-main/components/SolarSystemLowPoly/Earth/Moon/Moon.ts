import { Group } from "three";
import { loadMoonPlanet } from "./loadMoon";
import type { Updatable } from "@interface";
import { moonInfo } from "@constants";
import gsap from "gsap/dist/gsap";

class Moon extends Group {
  name = "Moon";
  moonPlanet: Awaited<ReturnType<typeof loadMoonPlanet>> | null = null;
  rotateMoon: gsap.core.Tween | null = null;
  rotateMoonPlanet: gsap.core.Tween | null = null;

  constructor() {
    super();
  }

  public async init() {
    const moon = await loadMoonPlanet();
    this.moonPlanet = moon;
    this.add(this.moonPlanet);

    this.animateMoon();
    this.animateMoonPlanet();
  }

  private animateMoonPlanet = () => {
    if (this.moonPlanet) {
      this.rotateMoonPlanet = gsap.to(this.moonPlanet.rotation, {
        duration: moonInfo.selfRotation,
        y: Math.PI * 2,
        repeat: -1,
        ease: "none",
      });
    }
  };

  private animateMoon = () => {
    this.rotateMoon = gsap.to(this.rotation, {
      duration: moonInfo.earthAxisRotation,
      y: Math.PI * 2,
      repeat: -1,
      ease: "none",
    });
  };

  public resumeMoonAnimation() {
    this.rotateMoon?.resume();
    this.rotateMoonPlanet?.resume();
  }

  public stopMoonhAnimation() {
    this.rotateMoon?.pause();
    this.rotateMoonPlanet?.pause();
  }
}

export { Moon };
