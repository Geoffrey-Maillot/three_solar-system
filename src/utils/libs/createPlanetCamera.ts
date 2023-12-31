import { PerspectiveCamera } from "three";
import { moonInfo, planetInfo } from "@constants";
import { PlanetMoon } from "@interface";
import { setDistancePlanetCamera } from "@utils";

const settings = {
  fov: 60,
  aspectRatio: 2, // dummy value
  zNear: 0.1,
  zfar: 10000,
};

function createPlanetCamera(planet: PlanetMoon) {
  const camera = new PerspectiveCamera(
    settings.fov,
    settings.aspectRatio,
    settings.zNear,
    settings.zfar,
  );

  const rayon = planet === "moon" ? moonInfo.rayon : planetInfo[planet].rayon;
  camera.position.set(0, 0, setDistancePlanetCamera(rayon));
  camera.lookAt(0, 0, 0);

  return camera;
}
export { createPlanetCamera };
