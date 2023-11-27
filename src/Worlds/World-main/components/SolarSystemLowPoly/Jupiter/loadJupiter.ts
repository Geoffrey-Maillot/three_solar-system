import { Group, Mesh, MeshPhysicalMaterial } from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { planetInfo } from "@constants";
import { PlanetMoon } from "@interface";
import { scaleSphereModel } from "@utils";

async function loadJupiterPlanet() {
  const loader = new GLTFLoader();
  const jupiterData = await loader.loadAsync(
    "/src/assets/model/low-poly/Jupiter.glb",
  );

  const jupiter = jupiterData.scene.children[0] as Mesh;
  (jupiter.material as MeshPhysicalMaterial).roughness = 0.8;
  (jupiter.material as MeshPhysicalMaterial).metalness = 0.9;
  (jupiter.material as MeshPhysicalMaterial).clearcoat = 0.5;
  jupiter.scale.setScalar(scaleSphereModel(planetInfo.jupiter.rayon));

  jupiter.geometry.center();
  const name: PlanetMoon = "jupiter";
  jupiter.name = name;

  const jupiterContainerGroup = new Group();
  jupiterContainerGroup.position.setX(planetInfo.jupiter.distanceFromSun);
  jupiterContainerGroup.add(jupiter);

  return { jupiter, jupiterContainerGroup };
}

export { loadJupiterPlanet };
