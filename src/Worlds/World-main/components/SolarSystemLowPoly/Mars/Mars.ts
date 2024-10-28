import { Group, PerspectiveCamera } from "three";
import { loadMarsPlanet } from "./loadMars";
import { planetInfo } from "@constants";
import gsap from "gsap";
import { AddCamera } from "@interface";
import { createPlanetCamera } from "@utils";

class Mars extends Group {
  marsPlanet: Awaited<ReturnType<typeof loadMarsPlanet>> | null = null;
  rotateMarsPlanet: gsap.core.Tween | null = null;
  rotateMars: gsap.core.Tween | null = null;
  camera: PerspectiveCamera;

  constructor(addCamera: AddCamera) {
    super();
    this.camera = createPlanetCamera("mars");

    addCamera("marsCam", this.camera);
  }
  public async init() {
    const mars = await loadMarsPlanet();
    this.marsPlanet = mars;
    this.add(this.marsPlanet);

    this.animateMarsPlanet();
    this.animateMars();
  }

  private animateMarsPlanet = () => {
    if (this.marsPlanet) {
      this.rotateMarsPlanet = gsap.to(this.marsPlanet.rotation, {
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
