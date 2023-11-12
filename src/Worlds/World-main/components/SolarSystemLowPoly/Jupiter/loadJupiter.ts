import { Mesh, MeshPhysicalMaterial } from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { planetInfo } from "@constants";

async function loadJupiterPlanet() {
  const loader = new GLTFLoader();
  const jupiterData = await loader.loadAsync(
    "/src/assets/model/low-poly/Jupiter.glb",
  );

  const jupiter = jupiterData.scene.children[0] as Mesh;
  (jupiter.material as MeshPhysicalMaterial).roughness = 0.8;
  (jupiter.material as MeshPhysicalMaterial).metalness = 0.9;
  (jupiter.material as MeshPhysicalMaterial).clearcoat = 0.5;

  jupiter.geometry.center();
  jupiter.position.setX(planetInfo.jupiter.distanceFromSun);

  return jupiter;
}

export { loadJupiterPlanet };
