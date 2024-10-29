import { Group, Mesh } from "three";
import { createGeometrie } from "./geometrie";
import { createMaterial } from "./material";
import { planetInfo } from "@constants";
import { PlanetMoon } from "@interface";

async function createVenus() {
  const { material } = await createMaterial();
  const { geometrie } = createGeometrie();

  const venus = new Mesh(geometrie, material);
  const name: PlanetMoon = "venus";
  venus.name = name;

  const venusContainerGroup = new Group();
  venusContainerGroup.position.x = planetInfo.venus.distanceFromSun;
  venusContainerGroup.add(venus);

  return { venus, venusContainerGroup };
}

export { createVenus };
