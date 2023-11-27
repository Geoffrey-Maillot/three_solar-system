import { PlanetMoon } from "@interface";
import { Group, Mesh, MeshPhysicalMaterial } from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { scaleSphereModel } from "@utils";
import { planetInfo } from "@constants";

async function loadSun() {
  const loader = new GLTFLoader();
  const sunData = await loader.loadAsync("/src/assets/model/low-poly/Sun.glb");

  const sun = sunData.scene.children[0] as Mesh;
  (sun.material as MeshPhysicalMaterial).roughness = 0.8;
  (sun.material as MeshPhysicalMaterial).metalness = 0.9;
  (sun.material as MeshPhysicalMaterial).clearcoat = 0.5;
  sun.scale.setScalar(scaleSphereModel(planetInfo.sun.rayon));

  sun.geometry.center();
  const name: PlanetMoon = "sun";
  sun.name = name;

  const sunContainerGroup = new Group();
  sunContainerGroup.add(sun);

  return { sun, sunContainerGroup };
}

export { loadSun };
