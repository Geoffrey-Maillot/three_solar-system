import { Clock, PerspectiveCamera, Scene, WebGLRenderer } from "three";
import { Updatable } from "@interface";

const clock = new Clock();

class Loop {
  private camera;
  private scene;
  private renderer;
  public updatables: Array<Updatable> = [];

  constructor(
    camera: PerspectiveCamera,
    scene: Scene,
    renderer: WebGLRenderer,
  ) {
    this.camera = camera;
    this.scene = scene;
    this.renderer = renderer;
  }

  animation() {
    this.renderer.render(this.scene, this.camera);
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
}

export { Loop };
