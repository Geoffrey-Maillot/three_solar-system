import { PerspectiveCamera } from "three";

const settings = {
  fov: 45,
  aspectRatio: 2, // dummy value
  zNear: 0.1,
  zfar: 50000,
};

function createMainCamera() {
  const camera = new PerspectiveCamera(
    settings.fov,
    settings.aspectRatio,
    settings.zNear,
    settings.zfar,
  );
  camera.position.set(0, 8000, 9000);
  camera.lookAt(0, 0, 0);
  camera.name = "mainCam";

  return camera;
}
export { createMainCamera };
