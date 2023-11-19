import { PlanetMoon } from "@interface";
import { Mesh, MeshPhysicalMaterial } from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

async function loadSun() {
  const loader = new GLTFLoader();
  const sunData = await loader.loadAsync("/src/assets/model/low-poly/Sun.glb");

  const sun = sunData.scene.children[0] as Mesh;
  (sun.material as MeshPhysicalMaterial).roughness = 0.8;
  (sun.material as MeshPhysicalMaterial).metalness = 0.9;
  (sun.material as MeshPhysicalMaterial).clearcoat = 0.5;

  sun.geometry.center();
  const name: PlanetMoon = "sun";
  sun.name = name;

  return sun;
}

export { loadSun };
