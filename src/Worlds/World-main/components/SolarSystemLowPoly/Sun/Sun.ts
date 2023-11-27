import { Group, PerspectiveCamera } from "three";
import { loadSun } from "./loadSun";
import { planetInfo } from "@constants";

import gsap from "gsap";
import { AddCamera } from "@interface";
import { createPlanetCamera } from "@utils";

class Sun extends Group {
  sunElements: Awaited<ReturnType<typeof loadSun>> | null = null;
  rotateSun: gsap.core.Tween | null = null;
  camera: PerspectiveCamera;

  constructor(addCamera: AddCamera) {
    super();
    this.camera = createPlanetCamera("sun");
    addCamera("sunCam", this.camera);
  }

  public async init() {
    const sunElements = await loadSun();
    const { sunContainerGroup } = sunElements;
    sunContainerGroup.add(this.camera);
    this.sunElements = sunElements;
    this.add(sunContainerGroup);
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
