import { Group, Mesh } from "three";
import { createGeometrie } from "./geometrie";
import { createMaterial } from "./material";
import { planetInfo } from "@constants";
import { PlanetMoon } from "@interface";

async function createMercury() {
  const { material } = await createMaterial();
  const { geometrie } = createGeometrie();

  const mercury = new Mesh(geometrie, material);

  const name: PlanetMoon = "mercury";
  mercury.name = name;

  const mercuryContainerGroup = new Group();
  mercuryContainerGroup.position.x = planetInfo.mercury.distanceFromSun;
  mercuryContainerGroup.add(mercury);
  return { mercury, mercuryContainerGroup };
}

export { createMercury };
