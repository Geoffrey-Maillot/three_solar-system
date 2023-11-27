import { Group, Mesh, MeshPhysicalMaterial } from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { planetInfo } from "@constants";
import { PlanetMoon } from "@interface";
import { scaleSphereModel } from "@utils";

async function loadNeptunePlanet() {
  const loader = new GLTFLoader();
  const neptuneData = await loader.loadAsync(
    "/src/assets/model/low-poly/Neptune.glb",
  );

  const neptune = neptuneData.scene.children[0] as Mesh;
  (neptune.material as MeshPhysicalMaterial).roughness = 0.8;
  (neptune.material as MeshPhysicalMaterial).metalness = 0.9;
  (neptune.material as MeshPhysicalMaterial).clearcoat = 0.5;
  neptune.scale.setScalar(scaleSphereModel(planetInfo.neptune.rayon));

  neptune.geometry.center();
  neptune;
  const name: PlanetMoon = "moon";
  neptune.name = name;

  const neptuneContainerGroup = new Group();
  neptuneContainerGroup.position.setX(planetInfo.neptune.distanceFromSun);
  neptuneContainerGroup.add(neptune);

  return { neptune, neptuneContainerGroup };
}

export { loadNeptunePlanet };
