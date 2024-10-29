import { Group, PerspectiveCamera } from "three";
import { AddCamera } from "@interface";
import { createSaturne } from "./meshs";
import { planetInfo } from "@constants";
import gsap from "gsap";
import { createPlanetCamera } from "@utils";

class Saturne extends Group {
  saturneElements: Awaited<ReturnType<typeof createSaturne>> | null = null;
  rotateSaturnePlanet: gsap.core.Tween | null = null;
  rotateSaturne: gsap.core.Tween | null = null;
  camera: PerspectiveCamera;
  constructor(addCamera: AddCamera) {
    super();
    this.camera = createPlanetCamera("saturne", "Hd");
    addCamera("saturneCamHd", this.camera);
  }

  public async init() {
    const saturneElements = await createSaturne();
    const { saturneContainerGroup } = saturneElements;
    saturneContainerGroup.add(this.camera);
    this.saturneElements = saturneElements;
    this.add(saturneContainerGroup);

    this.animateSaturnePlanet();
    this.animateSaturne();
  }

  private animateSaturnePlanet = () => {
    if (this.saturneElements) {
      this.rotateSaturnePlanet = gsap.to(
        this.saturneElements.saturne.rotation,
        {
          duration: planetInfo.saturne.selfRotation,
          y: Math.PI * 2,
          repeat: -1,
          ease: "none",
        },
      );
    }
  };

  private animateSaturne = () => {
    this.rotateSaturne = gsap.to(this.rotation, {
      duration: planetInfo.saturne.sunAxisRotation,
      y: Math.PI * 2,
      repeat: -1,
      ease: "none",
    });
  };

  public resumeSaturneRotation() {
    this.rotateSaturne?.resume();
    this.rotateSaturnePlanet?.resume();
  }

  public stopSaturneRotation() {
    this.rotateSaturne?.pause();
    this.rotateSaturnePlanet?.pause();
  }
}

export { Saturne };
