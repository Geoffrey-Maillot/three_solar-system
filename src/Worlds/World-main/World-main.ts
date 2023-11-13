import {
  WebGLRenderer,
  PerspectiveCamera,
  Scene,
  CubeTextureLoader,
  CubeTexture,
} from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

import { createRenderer } from "./system/renderer";
import { Resizer } from "./system/Resizer";
import { Loop } from "./system/Loop";
import { createControls } from "./system/controls";

import { createCamera } from "./components/camera";
import { createScene } from "./components/scene";
import { Updatable, SolarSystemName } from "@interface";

import { SolarSystemHd } from "./components/SolarSystemHd/SolarSytemHd";
import { SolarSystemLowPoly } from "./components/SolarSystemLowPoly/SolarSystemLowPoly";

class WorldMain {
  private canvas: HTMLCanvasElement;
  private renderer: WebGLRenderer;
  private camera: PerspectiveCamera;
  private scene: Scene;
  private loop: Loop;
  private updatables: Array<Updatable>;
  private controls: OrbitControls;
  private solarSystemHd: SolarSystemHd;
  private solarSystemLowPoly: SolarSystemLowPoly;
  private backgroundTexture: CubeTexture | null = null;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.camera = createCamera();
    this.renderer = createRenderer(this.canvas);
    this.scene = createScene();

    this.loop = new Loop(this.camera, this.scene, this.renderer);
    this.updatables = this.loop.updatables;

    this.controls = createControls(this.camera, this.canvas, this.updatables);

    this.solarSystemHd = new SolarSystemHd(this.updatables);
    this.solarSystemLowPoly = new SolarSystemLowPoly(this.updatables);

    new Resizer(this.camera, this.renderer);
    console.log(this);
  }

  public async init() {
    this.backgroundTexture = await new CubeTextureLoader().loadAsync([
      "/src/assets/texture/background/ny_eso0932a.jpg",
      "/src/assets/texture/background/py_eso0932a.jpg",
      "/src/assets/texture/background/ny_eso0932a.jpg",
      "/src/assets/texture/background/py_eso0932a.jpg",
      "/src/assets/texture/background/ny_eso0932a.jpg",
      "/src/assets/texture/background/py_eso0932a.jpg",
    ]);

    this.scene.background = this.backgroundTexture;
    await this.solarSystemHd.init();
    await this.solarSystemLowPoly.init();

    //this.scene.add(this.solarSystemLowPoly);
    this.scene.add(this.solarSystemHd);
  }

  public changeSolarSystem() {
    const name = this.scene.children[0].name as SolarSystemName;

    if (name === "solarSystemLowPoly") {
      this.scene.remove(this.solarSystemLowPoly);
      this.scene.add(this.solarSystemHd);
    } else {
      this.scene.remove(this.solarSystemHd);
      this.scene.add(this.solarSystemLowPoly);
    }
  }

  render() {
    this.renderer.render(this.scene, this.camera);
  }

  start() {
    this.loop.start();
  }

  stop() {
    this.loop.stop();
  }
}

export { WorldMain };