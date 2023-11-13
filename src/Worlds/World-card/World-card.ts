import { PlanetMoon } from "@interface";
import { textureUrl, modelUrl } from "@constants";

import {
  Clock,
  MathUtils,
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
  HemisphereLight,
  Mesh,
  MeshPhongMaterial,
  TextureLoader,
  SphereGeometry,
  MeshPhysicalMaterial,
  DirectionalLight,
} from "three";

import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

class WorldCard {
  private canvas;
  private renderer;
  private scene;
  private camera;
  private planet: any;
  private clock;
  private loader;
  private loaderModel;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.renderer = new WebGLRenderer({
      antialias: true,
      canvas: this.canvas,
      alpha: true,
    });
    this.renderer.setClearColor(0x000000, 0);
    this.renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    this.scene = new Scene();
    this.camera = new PerspectiveCamera(
      75,
      canvas.clientWidth / canvas.clientHeight,
      0.1,
      1000,
    );
    this.camera.position.set(0, 5, 95);
    this.camera.lookAt(0, 0, 0);
    this.scene.add(this.camera);
    const ambiantlight = new HemisphereLight(0xffffff, 0xffffff, 3);
    const leftLight = new DirectionalLight(0xffffff, 5);
    const rightLight = leftLight.clone();
    leftLight.position.set(-400, 0, 0);
    rightLight.position.set(400, 0, 0);
    this.scene.add(ambiantlight, leftLight, rightLight);
    this.clock = new Clock();
    this.loader = new TextureLoader();
    this.loaderModel = new GLTFLoader();
  }

  public async loadPlanetHd(name: PlanetMoon) {
    const oldMesh = this.scene.children.find((child) => (child as Mesh).isMesh);
    if (oldMesh) {
      this.scene.remove(oldMesh);
    }
    const texture = await this.loader.loadAsync(textureUrl[name]);
    const material = new MeshPhongMaterial({ map: texture });
    const planet = new Mesh(new SphereGeometry(50, 60, 60), material);
    this.planet = planet;
    this.scene.add(this.planet);
  }

  public async loadPlanetLowPoly(name: PlanetMoon) {
    const oldMesh = this.scene.children.find((child) => (child as Mesh).isMesh);
    if (oldMesh) {
      this.scene.remove(oldMesh);
    }

    const modelData = await this.loaderModel.loadAsync(modelUrl[name]);

    const model = modelData.scene.children[0] as Mesh;
    (model.material as MeshPhysicalMaterial).roughness = 0.8;
    (model.material as MeshPhysicalMaterial).metalness = 0.9;
    (model.material as MeshPhysicalMaterial).clearcoat = 0.5;

    model.geometry.center();
    this.planet = model;
    this.scene.add(this.planet);
  }

  private animation = (delta: number) => {
    this.planet.rotateY(MathUtils.degToRad(15) * delta);
  };

  private render() {
    this.renderer.render(this.scene, this.camera);
  }

  start() {
    this.renderer.setAnimationLoop(() => {
      this.animation(this.clock.getDelta());
      this.render();
    });
  }

  stop() {
    this.renderer.setAnimationLoop(null);
  }
}

export { WorldCard };
