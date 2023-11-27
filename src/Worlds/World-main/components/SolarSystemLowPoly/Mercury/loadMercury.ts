import { Group, Mesh, MeshPhysicalMaterial } from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { planetInfo } from "@constants";
import { PlanetMoon } from "@interface";

async function loadMercuryPlanet() {
  const loader = new GLTFLoader();
  const mercuryData = await loader.loadAsync(
    "/src/assets/model/low-poly/Mercury.glb",
  );

  const mercury = mercuryData.scene.children[0] as Mesh;
  (mercury.material as MeshPhysicalMaterial).roughness = 0.8;
  (mercury.material as MeshPhysicalMaterial).metalness = 0.9;
  (mercury.material as MeshPhysicalMaterial).clearcoat = 0.5;

  mercury.geometry.center();
  const name: PlanetMoon = "mercury";
  mercury.name = name;

  const mercuryContainerGroup = new Group();
  mercuryContainerGroup.position.setX(planetInfo.mercury.distanceFromSun);
  mercuryContainerGroup.add(mercury);

  return { mercury, mercuryContainerGroup };
}

export { loadMercuryPlanet };
