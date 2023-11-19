import { Mesh, MeshPhysicalMaterial } from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

import { planetInfo } from "@constants";
import { PlanetMoon } from "@interface";

async function loadEarthPlanet() {
  const loader = new GLTFLoader();
  const earthData = await loader.loadAsync(
    "/src/assets/model/low-poly/Earth.glb",
  );

  const earth = earthData.scene.children[0] as Mesh;
  (earth.material as MeshPhysicalMaterial).roughness = 0.8;
  (earth.material as MeshPhysicalMaterial).metalness = 0.9;
  (earth.material as MeshPhysicalMaterial).clearcoat = 0.5;

  earth.geometry.center();
  const earthInfo = planetInfo.earth;
  earth.position.x = earthInfo.distanceFromSun;
  const name: PlanetMoon = "earth";
  earth.name = name;

  return earth;
}

export { loadEarthPlanet };
