import { Group, PerspectiveCamera } from "three";
import { AddCamera } from "@interface";
import { createMars } from "./mesh";
import { planetInfo } from "@constants";
import gsap from "gsap";
import { createPlanetCamera } from "@utils";

class Mars extends Group {
  marsElements: Awaited<ReturnType<typeof createMars>> | null = null;
  rotateMarsPlanet: gsap.core.Tween | null = null;
  rotateMars: gsap.core.Tween | null = null;
  camera: PerspectiveCamera;
  constructor(addCamera: AddCamera) {
    super();
    this.camera = createPlanetCamera("mars", "Hd");
    addCamera("marsCamHd", this.camera);
  }

  public async init() {
    const marsElements = await createMars();
    const { marsContainerGroup } = marsElements;
    marsContainerGroup.add(this.camera);
    this.marsElements = marsElements;
    this.add(marsContainerGroup);

    this.animateMarsPlanet();
    this.animateMars();
  }

  private animateMarsPlanet = () => {
    if (this.marsElements) {
      this.rotateMarsPlanet = gsap.to(this.marsElements.mars.rotation, {
        duration: planetInfo.mars.selfRotation,
        y: Math.PI * 2,
        repeat: -1,
        ease: "none",
      });
    }
  };

  private animateMars = () => {
    this.rotateMars = gsap.to(this.rotation, {
      duration: planetInfo.mars.sunAxisRotation,
      y: Math.PI * 2,
      repeat: -1,
      ease: "none",
    });
  };

  public resumeMarsRotation() {
    this.rotateMars?.resume();
    this.rotateMarsPlanet?.resume();
  }

  public stopMarsotation() {
    this.rotateMars?.pause();
    this.rotateMarsPlanet?.pause();
  }
}

export { Mars };
