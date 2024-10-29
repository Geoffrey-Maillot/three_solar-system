import { Group, Mesh } from "three";
import { createGeometrie } from "./geometrie";
import { createMaterial } from "./material";
import { planetInfo } from "@constants";
import { PlanetMoon } from "@interface";

async function createEarth() {
  const { material } = await createMaterial();
  const { geometrie } = createGeometrie();

  const earth = new Mesh(geometrie, material);
  const name: PlanetMoon = "earth";
  earth.name = name;

  const earthContainerGroup = new Group();
  earthContainerGroup.position.x = planetInfo.earth.distanceFromSun;
  earthContainerGroup.add(earth);

  return { earth, earthContainerGroup };
}

export { createEarth };
