import { PerspectiveCamera } from 'three';

const settings = {
  fov: 75,
  aspectRatio: 2, // dummy value
  zNear: 0.1,
  zfar: 10000,
};

function createCamera () {


  const camera = new PerspectiveCamera(settings.fov,settings.aspectRatio, settings.zNear, settings.zfar)
  camera.position.set(0, 0, 150)
  camera.lookAt(0,0,0)

  return camera
}
export {createCamera}