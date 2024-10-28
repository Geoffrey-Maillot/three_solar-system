import { Group, PerspectiveCamera } from "three";
import { loadMoonPlanet } from "./loadMoon";
import { moonInfo } from "@constants";
import gsap from "gsap/dist/gsap";
import { AddCamera } from "@interface";
import { createPlanetCamera } from "@utils";

class Moon extends Group {
  moonElements: Awaited<ReturnType<typeof loadMoonPlanet>> | null = null;
  rotateMoon: gsap.core.Tween | null = null;
  rotateMoonPlanet: gsap.core.Tween | null = null;
  camera: PerspectiveCamera;

  constructor(addCamera: AddCamera) {
    super();
    this.camera = createPlanetCamera("moon", "LowPoly");
    addCamera("moonCamLowPoly", this.camera);
  }

  public async init() {
    const moonElements = await loadMoonPlanet();
    const { moonContainerGroup } = moonElements;
    moonContainerGroup.add(this.camera);

    this.moonElements = moonElements;
    this.add(moonContainerGroup);

    this.animateMoon();
    this.animateMoonPlanet();
  }

  private animateMoonPlanet = () => {
    if (this.moonElements?.moon) {
      this.rotateMoonPlanet = gsap.to(this.moonElements.moon.rotation, {
        duration: moonInfo.selfRotation,
        y: -Math.PI * 2,
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
