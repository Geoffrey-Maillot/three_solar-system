import { Group, PerspectiveCamera } from "three";
import { loadNeptunePlanet } from "./loadNeptune";
import { planetInfo } from "@constants";
import gsap from "gsap";
import { AddCamera } from "@interface";
import { createPlanetCamera } from "@utils";

class Neptune extends Group {
  neptuneElements: Awaited<ReturnType<typeof loadNeptunePlanet>> | null = null;
  rotateNeptunePlanet: gsap.core.Tween | null = null;
  rotateNeptune: gsap.core.Tween | null = null;
  camera: PerspectiveCamera;

  constructor(addCamera: AddCamera) {
    super();
    this.camera = createPlanetCamera("neptune");
    addCamera("neptuneCam", this.camera);
  }

  public async init() {
    const neptuneElements = await loadNeptunePlanet();
    const { neptuneContainerGroup } = neptuneElements;
    neptuneContainerGroup.add(this.camera);
    this.neptuneElements = neptuneElements;
    this.add(neptuneContainerGroup);

    this.animateNeptunePlanet();
    this.animateNeptune();
  }

  private animateNeptunePlanet = () => {
    if (this.neptuneElements?.neptune) {
      this.rotateNeptunePlanet = gsap.to(
        this.neptuneElements.neptune.rotation,
        {
          duration: planetInfo.neptune.selfRotation,
          y: Math.PI * 2,
          repeat: -1,
          ease: "none",
        },
      );
    }
  };

  private animateNeptune = () => {
    this.rotateNeptune = gsap.to(this.rotation, {
      duration: planetInfo.neptune.sunAxisRotation,
      y: Math.PI * 2,
      repeat: -1,
      ease: "none",
    });
  };

  public resumeNeptuneRotation() {
    this.rotateNeptune?.resume();
    this.rotateNeptunePlanet?.resume();
  }

  public stopNeptuneRotation() {
    this.rotateNeptune?.pause();
    this.rotateNeptunePlanet?.pause();
  }
}

export { Neptune };
