import { Group, PerspectiveCamera } from "three";
import { createUranus } from "./mesh";
import { planetInfo } from "@constants";
import gsap from "gsap";
import { AddCamera } from "@interface";
import { createPlanetCamera } from "@utils";

class Uranus extends Group {
  uranusElements: Awaited<ReturnType<typeof createUranus>> | null = null;
  rotateUranusPlanet: gsap.core.Tween | null = null;
  rotateUranus: gsap.core.Tween | null = null;
  camera: PerspectiveCamera;
  constructor(addCamera: AddCamera) {
    super();
    this.camera = createPlanetCamera("uranus", "Hd");
    addCamera("uranusCamHd", this.camera);
  }

  public async init() {
    const uranusElements = await createUranus();
    const { uranusContainerGroup } = uranusElements;
    uranusContainerGroup.add(this.camera);
    this.uranusElements = uranusElements;
    this.add(uranusContainerGroup);

    this.animateUranusPlanet();
    this.animateUranus();
  }

  private animateUranusPlanet = () => {
    if (this.uranusElements) {
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
