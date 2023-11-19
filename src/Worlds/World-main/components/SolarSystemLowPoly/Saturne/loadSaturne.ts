import { Mesh, MeshPhysicalMaterial } from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { planetInfo } from "@constants";
import { PlanetMoon } from "@interface";

async function loadSaturnePlanet() {
  const loader = new GLTFLoader();
  const saturneData = await loader.loadAsync(
    "/src/assets/model/low-poly/Saturne.glb",
  );

  const saturne = saturneData.scene.children[0] as Mesh;
  (saturne.material as MeshPhysicalMaterial).roughness = 0.8;
  (saturne.material as MeshPhysicalMaterial).metalness = 0.9;
  (saturne.material as MeshPhysicalMaterial).clearcoat = 0.5;

  saturne.geometry.center();
  saturne.position.setX(planetInfo.saturne.distanceFromSun);
  const name: PlanetMoon = "saturne";
  saturne.name = name;

  return saturne;
}

export { loadSaturnePlanet };
