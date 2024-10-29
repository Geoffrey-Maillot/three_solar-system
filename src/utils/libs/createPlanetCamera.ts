import { PerspectiveCamera } from "three";
import { moonInfo, planetInfo } from "@constants";
import { PlanetMoon, SolarSystemInfo } from "@interface";
import { setDistancePlanetCamera } from "@utils";

const settings = {
  fov: 60,
  aspectRatio: 2, // dummy value
  zNear: 0.1,
  zfar: 10000,
};

function createPlanetCamera(planet: PlanetMoon, type: SolarSystemInfo) {
  const camera = new PerspectiveCamera(
    settings.fov,
    settings.aspectRatio,
    settings.zNear,
    settings.zfar,
  );

  const rayon = planet === "moon" ? moonInfo.rayon : planetInfo[planet].rayon;
  camera.position.set(0, 25, setDistancePlanetCamera(rayon));
  camera.lookAt(0, 0, 0);
  camera.name = planet + "Cam" + type;

  return camera;
}
export { createPlanetCamera };
