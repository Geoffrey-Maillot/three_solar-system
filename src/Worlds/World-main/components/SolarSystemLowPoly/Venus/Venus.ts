import { Group } from "three";
import { loadVenusPlanet } from "./loadVenus";
import { planetInfo } from "@constants";
import gsap from "gsap";

class Venus extends Group {
  venusPlanet: Awaited<ReturnType<typeof loadVenusPlanet>> | null = null;
  rotateVenusPlanet: gsap.core.Tween | null = null;
  rotateVenus: gsap.core.Tween | null = null;

  constructor() {
    super();
  }

  public async init() {
    const venus = await loadVenusPlanet();
    this.venusPlanet = venus;
    this.add(this.venusPlanet);

    this.animateVenusPlanet();
    this.animateVenus();
  }

  private animateVenusPlanet = () => {
    if (this.venusPlanet) {
      this.rotateVenusPlanet = gsap.to(this.venusPlanet.rotation, {
        duration: planetInfo.venus.selfRotation,
        y: Math.PI * 2,
        repeat: -1,
        ease: "none",
      });
    }
  };

  private animateVenus = () => {
    this.rotateVenus = gsap.to(this.rotation, {
      duration: planetInfo.venus.sunAxisRotation,
      y: Math.PI * 2,
      repeat: -1,
      ease: "none",
    });
  };

  public resumeVenusRotation() {
    this.rotateVenus?.resume();
    this.rotateVenusPlanet?.resume();
  }

  public stopVenusRotation() {
    this.rotateVenus?.pause();
    this.rotateVenusPlanet?.pause();
  }
}

export { Venus };
