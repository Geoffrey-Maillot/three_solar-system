import { Group } from "three";
import { AddCamera, Planet } from "@interface";
import { createVenus } from "./mesh";
import { planetInfo } from "@constants";
import gsap from "gsap";

class Venus extends Group {
  venusPlanet: Awaited<ReturnType<typeof createVenus>> | null = null;
  rotateVenusPlanet: gsap.core.Tween | null = null;
  rotateVenus: gsap.core.Tween | null = null;

  constructor(addCamera: AddCamera) {
    super();
  }

  public async init() {
    const venus = await createVenus();
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
