import { PerspectiveCamera } from "three";

import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { Updatable, UpdatableParams } from "../../interface";

export function createControls(
  camera: PerspectiveCamera,
  canvas: HTMLCanvasElement,
  updatables: Array<Updatable>,
) {
  const controls = new OrbitControls(camera, canvas);
  // damping and auto rotation require
  // the controls to be updated each frame

  //controls.autoRotate = true;
  controls.enableDamping = true;

  const tick = ({delta}: UpdatableParams) => {
    controls.update(delta);
  };

  updatables.push(tick);

  return controls;
}
