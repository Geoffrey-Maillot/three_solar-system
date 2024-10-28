import { Group, PerspectiveCamera } from "three";
import { loadVenusPlanet } from "./loadVenus";
import { planetInfo } from "@constants";
import gsap from "gsap";
import { AddCamera } from "@interface";
import { createPlanetCamera } from "@utils";

class Venus extends Group {
  venusElements: Awaited<ReturnType<typeof loadVenusPlanet>> | null = null;
  rotateVenusPlanet: gsap.core.Tween | null = null;
  rotateVenus: gsap.core.Tween | null = null;
  camera: PerspectiveCamera;

  constructor(addCamera: AddCamera) {
    super();
    this.camera = createPlanetCamera("venus", "LowPoly");
    addCamera("venusCamLowPoly", this.camera);
  }

  public async init() {
    const venusElements = await loadVenusPlanet();
    const { venusContainerGroup } = venusElements;
    venusContainerGroup.add(this.camera);

    this.add(venusContainerGroup);
    this.venusElements = venusElements;

    this.animateVenusPlanet();
    this.animateVenus();
  }

  private animateVenusPlanet = () => {
    if (this.venusElements?.venus) {
      this.rotateVenusPlanet = gsap.to(this.venusElements.venus.rotation, {
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
