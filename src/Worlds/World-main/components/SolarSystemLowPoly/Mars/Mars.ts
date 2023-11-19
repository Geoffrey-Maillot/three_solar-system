import { Group } from "three";
import { loadMarsPlanet } from "./loadMars";
import { planetInfo } from "@constants";
import gsap from "gsap";

class Mars extends Group {
  marsPlanet: Awaited<ReturnType<typeof loadMarsPlanet>> | null = null;
  rotateMarsPlanet: gsap.core.Tween | null = null;
  rotateMars: gsap.core.Tween | null = null;

  constructor() {
    super();
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
