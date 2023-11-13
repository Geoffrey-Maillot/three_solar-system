import { Mesh, MeshPhysicalMaterial } from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { planetInfo } from "@constants";

async function loadNeptunePlanet() {
  const loader = new GLTFLoader();
  const neptuneData = await loader.loadAsync(
    "/src/assets/model/low-poly/Neptune.glb",
  );

  const neptune = neptuneData.scene.children[0] as Mesh;
  (neptune.material as MeshPhysicalMaterial).roughness = 0.8;
  (neptune.material as MeshPhysicalMaterial).metalness = 0.9;
  (neptune.material as MeshPhysicalMaterial).clearcoat = 0.5;

  neptune.geometry.center();
  neptune.position.setX(planetInfo.neptune.distanceFromSun);

  return neptune;
}

export { loadNeptunePlanet };