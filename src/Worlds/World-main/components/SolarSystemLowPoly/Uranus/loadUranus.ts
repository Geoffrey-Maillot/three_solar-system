import { Group, Mesh, MeshPhysicalMaterial } from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { planetInfo } from "@constants";
import { PlanetMoon } from "@interface";
import { scaleSphereModel } from "@utils";

async function loadUranusPlanet() {
  const loader = new GLTFLoader();
  const uranusData = await loader.loadAsync(
    "/src/assets/model/low-poly/Uranus.glb",
  );

  const uranus = uranusData.scene.children[0] as Mesh;
  (uranus.material as MeshPhysicalMaterial).roughness = 0.8;
  (uranus.material as MeshPhysicalMaterial).metalness = 0.9;
  (uranus.material as MeshPhysicalMaterial).clearcoat = 0.5;
  uranus.scale.setScalar(scaleSphereModel(planetInfo.uranus.rayon));

  uranus.geometry.center();
  const name: PlanetMoon = "uranus";
  uranus.name = name;

  const uranusContainerGroup = new Group();
  uranusContainerGroup.position.setX(planetInfo.uranus.distanceFromSun);
  uranusContainerGroup.add(uranus);

  return { uranus, uranusContainerGroup };
}

export { loadUranusPlanet };
