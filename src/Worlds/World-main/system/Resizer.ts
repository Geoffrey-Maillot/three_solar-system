import { PerspectiveCamera, WebGLRenderer } from "three";

class Resizer {
  private renderer: WebGLRenderer;
  private _camera: PerspectiveCamera;
  constructor(camera: PerspectiveCamera, renderer: WebGLRenderer) {
    this._camera = camera;
    this.renderer = renderer;

    this.setSize();

    window.addEventListener("resize", () => this.setSize());
  }

  public set camera(camera: PerspectiveCamera) {
    this._camera = camera;
  }

  setSize() {
    const canvas = this.renderer.domElement;
    const pixelRatio = window.devicePixelRatio;
    const width = (canvas.clientWidth * pixelRatio) | 0;
    const height = (canvas.clientHeight * pixelRatio) | 0;
    const needResize = canvas.width !== width || canvas.height !== height;

    if (needResize) {
      this.renderer.setSize(width, height, false);
      this._camera.aspect = canvas.clientWidth / canvas.clientHeight;
      this._camera.updateProjectionMatrix();
    }
  }
}
export { Resizer };
