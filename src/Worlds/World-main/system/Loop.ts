import { Clock, PerspectiveCamera, Scene, WebGLRenderer } from "three";
import { Updatable } from "@interface";

const clock = new Clock();

class Loop {
  private _camera: PerspectiveCamera;
  private scene: Scene;
  private renderer: WebGLRenderer;

  public updatables: Array<Updatable> = [];

  constructor(
    camera: PerspectiveCamera,
    scene: Scene,
    renderer: WebGLRenderer,
  ) {
    this._camera = camera;
    this.scene = scene;
    this.renderer = renderer;
  }

  animation() {
    this.renderer.render(this.scene, this._camera);
    this.tick();
  }

  start() {
    clock.start();
    this.renderer.setAnimationLoop(() => this.animation());
  }

  stop() {
    this.renderer.setAnimationLoop(null);
    clock.stop();
  }

  tick() {
    const delta = clock.getDelta();
    const elapsed = clock.getElapsedTime();

    this.updatables.forEach((tick) => tick({ delta, elapsed }));
  }

  public set camera(camera: PerspectiveCamera) {
    this._camera = camera;
  }
}

export { Loop };
