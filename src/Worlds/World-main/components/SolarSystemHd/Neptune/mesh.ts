import { Group, Mesh } from "three";
import { createGeometrie } from "./geometrie";
import { createMaterial } from "./material";
import { planetInfo } from "@constants";
import { PlanetMoon } from "@interface";

async function createNeptune() {
  const { material } = await createMaterial();
  const { geometrie } = createGeometrie();

  const neptune = new Mesh(geometrie, material);

  const name: PlanetMoon = "neptune";
  neptune.name = name;

  const neptuneContainerGroup = new Group();
  neptuneContainerGroup.position.x = planetInfo.neptune.distanceFromSun;
  neptuneContainerGroup.add(neptune);
  return { neptune, neptuneContainerGroup };
}

export { createNeptune };
