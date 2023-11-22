import {
  WebGLRenderer,
  PerspectiveCamera,
  Scene,
  CubeTextureLoader,
  CubeTexture,
  Vector3,
  Object3D,
  Object3DEventMap,
  Mesh,
} from "three";
import { setCardPlanet } from "@feature";

import { moonInfo, planetInfo } from "@constants";

import { createRenderer } from "./system/renderer";
import { Resizer } from "./system/Resizer";
import { Loop } from "./system/Loop";
import { createControls } from "./system/controls";

import { createCamera } from "./components/camera";
import { createScene } from "./components/scene";
import { Updatable, SolarSystemName, PlanetMoon } from "@interface";
import { getPositionFormMatrixWorld } from "@utils";

import { SolarSystemHd } from "./components/SolarSystemHd/SolarSytemHd";
import { SolarSystemLowPoly } from "./components/SolarSystemLowPoly/SolarSystemLowPoly";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

import gsap from "gsap";
import { GUI } from "three/addons/libs/lil-gui.module.min.js";

class WorldMain {
  private canvas: HTMLCanvasElement;
  private renderer: WebGLRenderer;
  private camera: PerspectiveCamera;
  private scene: Scene;
  private loop: Loop;
  private controls: OrbitControls;
  private updatables: Array<Updatable>;
  private solarSystemHd: SolarSystemHd;
  private solarSystemLowPoly: SolarSystemLowPoly;
  private backgroundTexture: CubeTexture | null = null;
  private _selectedPlanetName: PlanetMoon = "sun";
  private selectedPlanet: Object3D<Object3DEventMap> | null = null;
  private _selectedSolarSystem: SolarSystemName = "solarSystemHd";

  private positionTargetPlanet = new Vector3();
  private followTargetPlanet: gsap.core.Tween | null = null;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.camera = createCamera();
    this.renderer = createRenderer(this.canvas);
    this.scene = createScene();

    this.loop = new Loop(this.camera, this.scene, this.renderer);
    this.updatables = this.loop.updatables;

    this.controls = createControls(this.camera, this.canvas, this.updatables);

    // merttre ça dans une fonction en fonction de la cible
    this.controls.minDistance = 3500;
    this.controls.maxDistance = 20000;

    this.solarSystemHd = new SolarSystemHd(this.updatables);
    this.solarSystemLowPoly = new SolarSystemLowPoly(this.updatables);

    setCardPlanet(this.selectedPlanetName);

    new Resizer(this.camera, this.renderer);
    this.selectCurrentPlanet(this._selectedPlanetName);
    this.updatables.push(() => this.updatePositionPlanet());

    this.animateFollowTargetPlanet();

    /**
     * Debug
     */
    const gui = new GUI();
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

    this.scene.add(this[this.selectedSolarSystem]);
  }

  public changeSolarSystem() {
    const name = this.scene.children[0].name as SolarSystemName;

    if (name === "solarSystemLowPoly") {
      this.scene.remove(this.solarSystemLowPoly);
      this.scene.add(this.solarSystemHd);
      this.selectedSolarSystem = "solarSystemHd";
    } else {
      this.scene.remove(this.solarSystemHd);
      this.scene.add(this.solarSystemLowPoly);
      this.selectedSolarSystem = "solarSystemLowPoly";
    }
  }

  public render() {
    this.renderer.render(this.scene, this.camera);
  }

  public start() {
    this.loop.start();
  }

  public stop() {
    this.loop.stop();
  }

  public stopSolarSystem() {
    this.solarSystemHd.stopSolarSystem();
    this.solarSystemLowPoly.stopSolarSystem();
  }

  public startSolarSystem() {
    this.solarSystemHd.startSolarSystem();
    this.solarSystemLowPoly.startSolarSystem();
  }

  public selectCurrentPlanet(name: PlanetMoon) {
    let planet;
    if (this._selectedSolarSystem === "solarSystemHd") {
      planet = this.solarSystemHd.getObjectByName(name);
    } else {
      planet = this.solarSystemLowPoly.getObjectByName(name);
    }

    if (planet) {
      this.selectedPlanet = planet;
    }
  }

  public updatePositionPlanet() {
    if (this.selectedPlanet) {
      this.positionTargetPlanet = getPositionFormMatrixWorld(
        this.selectedPlanet,
      );
    }
    this.animateFollowTargetPlanet();
  }

  private animateFollowTargetPlanet() {
    this.followTargetPlanet = gsap.to(this.controls.target, {
      duration: 2,
      ease: "power1.out",
      x: this.positionTargetPlanet.x,
      y: this.positionTargetPlanet.y,
      z: this.positionTargetPlanet.z,
    });
  }

  public updateControlSettings() {
    let size;

    if (this._selectedPlanetName === "moon") {
      size = moonInfo.rayon;
    } else {
      size = planetInfo[this._selectedPlanetName].rayon;
    }
    const diamètre = size * 2;
    const factorDistanceMin = 2;
    this.controls.minDistance = diamètre * factorDistanceMin;
  }

  /**
   * GETTER
   */

  public get selectedPlanetName() {
    return this._selectedPlanetName;
  }
  public get selectedSolarSystem() {
    return this._selectedSolarSystem;
  }

  /**
   * SETTER
   */

  public set selectedPlanetName(planet: PlanetMoon) {
    this._selectedPlanetName = planet;
  }

  public set selectedSolarSystem(name: SolarSystemName) {
    this._selectedSolarSystem = name;
  }
}

export { WorldMain };
