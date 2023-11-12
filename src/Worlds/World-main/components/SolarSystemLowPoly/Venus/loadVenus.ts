import { Mesh, MeshPhysicalMaterial } from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { planetInfo } from "@constants";

async function loadVenusPlanet() {
  const loader = new GLTFLoader();
  const venusData = await loader.loadAsync(
    "/src/assets/model/low-poly/Venus.glb",
  );

  const venus = venusData.scene.children[0] as Mesh;
  (venus.material as MeshPhysicalMaterial).roughness = 0.8;
  (venus.material as MeshPhysicalMaterial).metalness = 0.9;
  (venus.material as MeshPhysicalMaterial).clearcoat = 0.5;

  venus.geometry.center();
  venus.position.x = planetInfo.venus.distanceFromSun;

  return venus;
}

export { loadVenusPlanet };
