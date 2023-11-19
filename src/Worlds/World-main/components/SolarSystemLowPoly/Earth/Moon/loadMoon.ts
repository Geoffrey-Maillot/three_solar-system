import { moonInfo } from "@constants";
import { PlanetMoon } from "@interface";
import { Mesh, MeshPhysicalMaterial, Vector3 } from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

async function loadMoonPlanet() {
  const loader = new GLTFLoader();
  const moonData = await loader.loadAsync(
    "/src/assets/model/low-poly/Moon.glb",
  );

  const moon = moonData.scene.children[0] as Mesh;
  (moon.material as MeshPhysicalMaterial).roughness = 0.8;
  (moon.material as MeshPhysicalMaterial).metalness = 0.9;
  (moon.material as MeshPhysicalMaterial).clearcoat = 0.5;

  moon.geometry.center();
  moon.scale.set(0.4, 0.4, 0.4);
  moon.position.x = moonInfo.distanceFromEarth;
  const name: PlanetMoon = "moon";
  moon.name = name;

  return moon;
}

export { loadMoonPlanet };
