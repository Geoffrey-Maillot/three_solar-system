import { Mesh, MeshPhysicalMaterial } from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { planetInfo } from "@constants";
import { PlanetMoon } from "@interface";
import { scaleSphereModel } from "@utils";

async function loadMarsPlanet() {
  const loader = new GLTFLoader();
  const marsData = await loader.loadAsync(
    "/src/assets/model/low-poly/Mars.glb",
  );

  const mars = marsData.scene.children[0] as Mesh;
  (mars.material as MeshPhysicalMaterial).roughness = 0.8;
  (mars.material as MeshPhysicalMaterial).metalness = 0.9;
  (mars.material as MeshPhysicalMaterial).clearcoat = 0.5;
  mars.scale.setScalar(scaleSphereModel(planetInfo.mars.rayon));

  mars.geometry.center();
  mars.position.setX(planetInfo.mars.distanceFromSun);
  const name: PlanetMoon = "mars";
  mars.name = name;

  return mars;
}

export { loadMarsPlanet };
