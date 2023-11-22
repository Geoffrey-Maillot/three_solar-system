import { PerspectiveCamera } from "three";

import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { Updatable, UpdatableParams } from "@interface";

export function createControls(
  camera: PerspectiveCamera,
  canvas: HTMLCanvasElement,
  updatables: Array<Updatable>,
) {
  const controls = new OrbitControls(camera, canvas);

  //controls.enableDamping = true;

  //controls.minPolarAngle = degToRad(45);
  //controls.maxAzimuthAngle = degToRad(90);
  //controls.minAzimuthAngle = degToRad(180);

  const tick = ({ delta }: UpdatableParams) => {
    controls.update(delta);
  };

  updatables.push(tick);

  return controls;
}
