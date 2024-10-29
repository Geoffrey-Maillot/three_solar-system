import { Group, PerspectiveCamera } from "three";
import { createJupiter } from "./mesh";
import { planetInfo } from "@constants";
import gsap from "gsap";
import { AddCamera } from "@interface";
import { createPlanetCamera } from "@utils";

class Jupiter extends Group {
  jupiterElements: Awaited<ReturnType<typeof createJupiter>> | null = null;
  rotateJupiterPlanet: gsap.core.Tween | null = null;
  rotateJupiter: gsap.core.Tween | null = null;
  camera: PerspectiveCamera;
  constructor(addCamera: AddCamera) {
    super();
    this.camera = createPlanetCamera("jupiter", "Hd");
    addCamera("jupiterCamHd", this.camera);
  }

  public async init() {
    const jupiterElements = await createJupiter();
    const { jupiterContainerGroup } = jupiterElements;
    jupiterContainerGroup.add(this.camera);
    this.jupiterElements = jupiterElements;
    this.add(jupiterContainerGroup);

    this.animateJupiterPlanet();
    this.animateJupiter();
  }

  private animateJupiterPlanet = () => {
    if (this.jupiterElements) {
      this.rotateJupiterPlanet = gsap.to(
        this.jupiterElements.jupiter.rotation,
        {
          duration: planetInfo.jupiter.selfRotation,
          y: Math.PI * 2,
          repeat: -1,
          ease: "none",
        },
      );
    }
  };

  private animateJupiter = () => {
    this.rotateJupiter = gsap.to(this.rotation, {
      duration: planetInfo.jupiter.sunAxisRotation,
      y: Math.PI * 2,
      repeat: -1,
      ease: "none",
    });
  };

  public resumeJupiterRotation() {
    this.rotateJupiter?.resume();
    this.rotateJupiterPlanet?.resume();
  }

  public stopJupiterRotation() {
    this.rotateJupiter?.pause();
    this.rotateJupiterPlanet?.pause();
  }
}

export { Jupiter };
