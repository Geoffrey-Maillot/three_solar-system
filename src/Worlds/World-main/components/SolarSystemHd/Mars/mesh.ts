import { Group, Mesh } from "three";
import { createGeometrie } from "./geometrie";
import { createMaterial } from "./material";
import { planetInfo } from "@constants";
import { PlanetMoon } from "@interface";

async function createMars() {
  const { material } = await createMaterial();
  const { geometrie } = createGeometrie();

  const mars = new Mesh(geometrie, material);
  const name: PlanetMoon = "mars";
  mars.name = name;

  const marsContainerGroup = new Group();
  marsContainerGroup.position.x = planetInfo.mars.distanceFromSun;
  marsContainerGroup.add(mars);
  return { mars, marsContainerGroup };
}

export { createMars };
