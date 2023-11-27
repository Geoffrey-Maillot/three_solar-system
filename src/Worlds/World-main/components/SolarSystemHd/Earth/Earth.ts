import { Group } from "three";
import { createEarth } from "./mesh";
import { planetInfo } from "@constants";
import { Moon } from "./Moon/Moon";
import gsap from "gsap";
import { AddCamera } from "@interface";

class Earth extends Group {
  planet: Awaited<ReturnType<typeof createEarth>> | null = null;
  moon: Moon;
  rotateEarth: gsap.core.Tween | null = null;
  rotateEarthPlanet: gsap.core.Tween | null = null;

  constructor(addCamera: AddCamera) {
    super();
    this.moon = new Moon(addCamera);
  }

  public async init() {
    const earth = await createEarth();
    await this.moon.init();
    earth.add(this.moon);
    this.planet = earth;
    this.add(this.planet);

    this.animateEarth();
    this.animateEarthPlanet();
  }

  animateEarth = () => {
    this.rotateEarth = gsap.to(this.rotation, {
      duration: planetInfo.earth.sunAxisRotation,
      y: Math.PI * 2,
      repeat: -1,
      ease: "none",
    });
  };

  animateEarthPlanet = () => {
    if (this.planet) {
      this.rotateEarthPlanet = gsap.to(this.planet.rotation, {
        duration: planetInfo.earth.selfRotation,
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
