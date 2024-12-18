import { Group, PerspectiveCamera } from "three";
import { createEarth } from "./mesh";
import { planetInfo } from "@constants";
import { Moon } from "./Moon/Moon";
import gsap from "gsap";
import { AddCamera } from "@interface";
import { createPlanetCamera } from "@utils";

class Earth extends Group {
  earthElements: Awaited<ReturnType<typeof createEarth>> | null = null;
  moon: Moon;
  rotateEarth: gsap.core.Tween | null = null;
  rotateEarthPlanet: gsap.core.Tween | null = null;
  camera: PerspectiveCamera;

  constructor(addCamera: AddCamera) {
    super();
    this.moon = new Moon(addCamera);
    this.camera = createPlanetCamera("earth", "Hd");

    addCamera("earthCamHd", this.camera);
  }

  public async init() {
    const earthElements = await createEarth();
    const { earth, earthContainerGroup } = earthElements;
    await this.moon.init();
    earth.add(this.moon);
    earthContainerGroup.add(this.camera);
    this.earthElements = earthElements;
    this.add(earthContainerGroup);

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
    if (this.earthElements) {
      this.rotateEarthPlanet = gsap.to(this.earthElements.earth.rotation, {
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
