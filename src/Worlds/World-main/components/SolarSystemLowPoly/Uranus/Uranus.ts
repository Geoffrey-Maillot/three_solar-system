import { Group } from "three";
import { loadUranusPlanet } from "./loadUranus";
import { planetInfo } from "@constants";
import gsap from "gsap";

class Uranus extends Group {
  uranusPlanet: Awaited<ReturnType<typeof loadUranusPlanet>> | null = null;
  rotateUranusPlanet: gsap.core.Tween | null = null;
  rotateUranus: gsap.core.Tween | null = null;

  constructor() {
    super();
  }

  public async init() {
    const uranus = await loadUranusPlanet();
    this.uranusPlanet = uranus;
    this.add(this.uranusPlanet);

    this.animateUranusPlanet();
    this.animateUranus();
  }

  private animateUranusPlanet = () => {
    if (this.uranusPlanet) {
      this.rotateUranusPlanet = gsap.to(this.uranusPlanet.rotation, {
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
