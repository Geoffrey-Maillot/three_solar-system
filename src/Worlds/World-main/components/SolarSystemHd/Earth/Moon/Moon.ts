import { Group, PerspectiveCamera } from "three";

import gsap from "gsap";

import { createMoon } from "./mesh";
import { moonInfo } from "@constants";
import { AddCamera } from "@interface";
import { createPlanetCamera } from "@utils";

class Moon extends Group {
  moonPlanet: Awaited<ReturnType<typeof createMoon>> | null = null;
  rotateMoon: gsap.core.Tween | null = null;
  rotateMoonPlanet: gsap.core.Tween | null = null;
  camera: PerspectiveCamera;
  constructor(addCamera: AddCamera) {
    super();
    this.camera = createPlanetCamera("moon", "Hd");
    addCamera("moonCamHd", this.camera);
  }

  public async init() {
    const moon = await createMoon();
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
