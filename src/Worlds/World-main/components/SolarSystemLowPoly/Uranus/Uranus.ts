import { Group, PerspectiveCamera } from "three";
import { loadUranusPlanet } from "./loadUranus";
import { planetInfo } from "@constants";
import gsap from "gsap";
import { AddCamera } from "@interface";
import { createPlanetCamera } from "@utils";

class Uranus extends Group {
  uranusElements: Awaited<ReturnType<typeof loadUranusPlanet>> | null = null;
  rotateUranusPlanet: gsap.core.Tween | null = null;
  rotateUranus: gsap.core.Tween | null = null;
  camera: PerspectiveCamera;

  constructor(addCamera: AddCamera) {
    super();
    this.camera = createPlanetCamera("uranus");
    addCamera("uranusCam", this.camera);
  }

  public async init() {
    const uranusElements = await loadUranusPlanet();
    const { uranusContainerGroup } = uranusElements;
    uranusContainerGroup.add(this.camera);
    this.add(uranusContainerGroup);
    this.uranusElements = uranusElements;

    this.animateUranusPlanet();
    this.animateUranus();
  }

  private animateUranusPlanet = () => {
    if (this.uranusElements?.uranus) {
      this.rotateUranusPlanet = gsap.to(this.uranusElements.uranus.rotation, {
        duration: planetInfo.uranus.selfRotation,
        y: Math.PI * 2,
        repeat: -1,
        ease: "none",
      });
    }
  };

  private animateUranus = () => {
    this.rotateUranus = gsap.to(this.rotation, {
      duration: planetInfo.uranus.sunAxisRotation,
      y: Math.PI * 2,
      repeat: -1,
      ease: "none",
    });
  };

  public resumeUranusRotation() {
    this.rotateUranus?.resume();
    this.rotateUranusPlanet?.resume();
  }

  public stopUranusRotation() {
    this.rotateUranus?.pause();
    this.rotateUranusPlanet?.pause();
  }
}

export { Uranus };
