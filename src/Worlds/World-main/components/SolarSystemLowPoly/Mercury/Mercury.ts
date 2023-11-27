import { Group, PerspectiveCamera } from "three";
import { loadMercuryPlanet } from "./loadMercury";
import { planetInfo } from "@constants";
import { AddCamera } from "@interface";
import { createPlanetCamera } from "@utils";
import gsap from "gsap";

class Mercury extends Group {
  mercuryElements: Awaited<ReturnType<typeof loadMercuryPlanet>> | null = null;
  rotateMercuryPlanet: gsap.core.Tween | null = null;
  rotateMercury: gsap.core.Tween | null = null;
  camera: PerspectiveCamera;

  constructor(addCamera: AddCamera) {
    super();
    this.camera = createPlanetCamera("mercury");

    addCamera("mercuryCam", this.camera);
  }
  public async init() {
    const mercuryElements = await loadMercuryPlanet();
    const { mercury, mercuryContainerGroup } = mercuryElements;
    mercuryContainerGroup.add(this.camera);
    this.mercuryElements = mercuryElements;
    this.add(mercuryContainerGroup);

    this.animateMercuryPlanet();
    this.animateMercury();
  }

  private animateMercuryPlanet = () => {
    if (this.mercuryElements?.mercury) {
      this.rotateMercuryPlanet = gsap.to(
        this.mercuryElements.mercury.rotation,
        {
          duration: planetInfo.mercury.selfRotation,
          y: Math.PI * 2,
          repeat: -1,
          ease: "none",
        },
      );
    }
  };

  private animateMercury = () => {
    this.rotateMercury = gsap.to(this.rotation, {
      duration: planetInfo.mercury.sunAxisRotation,
      y: Math.PI * 2,
      repeat: -1,
      ease: "none",
    });
  };

  public resumeMercuryRotation() {
    this.rotateMercury?.resume();
    this.rotateMercuryPlanet?.resume();
  }

  public stopMercuryRotation() {
    this.rotateMercury?.pause();
    this.rotateMercuryPlanet?.pause();
  }
}

export { Mercury };
