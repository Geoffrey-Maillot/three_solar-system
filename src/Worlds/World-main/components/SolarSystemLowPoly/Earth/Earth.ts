import { Group } from "three";
import { loadEarthPlanet } from "./loadEarth";
import { Moon } from "./Moon/Moon";
import { planetInfo } from "@constants";
import gsap from "gsap";

class Earth extends Group {
  earthPlanet: Awaited<ReturnType<typeof loadEarthPlanet>> | null = null;
  moon: Moon;

  rotateEarth: gsap.core.Tween | null = null;
  rotateEarthPlanet: gsap.core.Tween | null = null;

  constructor() {
    super();
    this.moon = new Moon();
  }

  public async init() {
    const earth = await loadEarthPlanet();
    await this.moon.init();
    earth.add(this.moon);
    this.earthPlanet = earth;
    this.add(this.earthPlanet);

    this.animateEarth();
    this.animateEarthPlanet();
  }
  animateEarth = () => {
    this.rotateEarth = gsap.to(this.rotation, {
      duration: planetInfo.earth.selfRotation,
      y: Math.PI * 2,
      repeat: -1,
      ease: "none",
    });
  };

  animateEarthPlanet = () => {
    if (this.earthPlanet) {
      this.rotateEarthPlanet = gsap.to(this.earthPlanet.rotation, {
        duration: planetInfo.earth.sunAxisRotation,
        y: Math.PI * 2,
        repeat: -1,
        ease: "none",
      });
    }
  };
  public resumeEarthAnimation() {
    this.moon.resumeMoonAnimation();
    this.rotateEarth?.resume();
    this.rotateEarthPlanet?.resume();
  }

  public stopEarthAnimation() {
    this.moon.stopMoonhAnimation();
    this.rotateEarth?.pause();
    this.rotateEarthPlanet?.pause();
  }
}

export { Earth };
