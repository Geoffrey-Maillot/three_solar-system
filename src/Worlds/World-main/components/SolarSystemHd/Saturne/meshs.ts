import { Group, Mesh } from "three";
import { createGeometrie } from "./geometries";
import { createMaterial } from "./materials";
import { planetInfo } from "@constants";
import { PlanetMoon } from "@interface";

async function createSaturne() {
  const { materialPlanet, materialRing } = await createMaterial();
  const { geometriePlanet, geomerieRing } = createGeometrie();

  const saturnePlanet = new Mesh(geometriePlanet, materialPlanet);
  const saturneRing = new Mesh(geomerieRing, materialRing);

  saturneRing.rotation.x = Math.PI / 2;

  const saturne = new Group();
  saturne.add(saturnePlanet, saturneRing);
  const name: PlanetMoon = "saturne";
  saturne.name = name;

  const saturneContainerGroup = new Group();
  saturneContainerGroup.position.x = planetInfo.saturne.distanceFromSun;
  saturneContainerGroup.add(saturne);

  return { saturne, saturneContainerGroup };
}

export { createSaturne };
