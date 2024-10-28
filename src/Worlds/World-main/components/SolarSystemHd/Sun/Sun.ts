import {
  Mesh,
  MeshPhongMaterial,
  Object3DEventMap,
  PointLight,
  SphereGeometry,
  Group,
  PerspectiveCamera,
} from "three";

import gsap from "gsap";

import { createSun } from "./mesh";
import { createLight } from "./light";

import { planetInfo } from "@constants";
import { AddCamera } from "@interface";
import { createPlanetCamera } from "@utils";

class Sun extends Group {
  sun: Mesh<SphereGeometry, MeshPhongMaterial, Object3DEventMap> | null = null;
  light: PointLight;
  rotateSun: gsap.core.Tween | null = null;
  camera: PerspectiveCamera;
  constructor(addCamera: AddCamera) {
    super();
    this.light = createLight();
    this.add(this.light);
    this.camera = createPlanetCamera("sun", "Hd");
    addCamera("sunCamHd", this.camera);
  }

  public async init() {
    const { sun } = await createSun();
    this.sun = sun;
    this.add(this.sun);
    this.animateSun();
  }

  private animateSun = () => {
    this.rotateSun = gsap.to(this.rotation, {
      duration: planetInfo.sun.selfRotation,
      y: Math.PI * 2,
      repeat: -1,
      ease: "none",
    });
  };

  public resumeSunAnimation() {
    this.rotateSun?.resume();
  }

  public stopSunAnimation() {
    this.rotateSun?.pause();
  }
}

export { Sun };
