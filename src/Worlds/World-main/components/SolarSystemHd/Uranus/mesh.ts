import { Group, Mesh } from "three";
import { createGeometrie } from "./geometrie";
import { createMaterial } from "./material";
import { planetInfo } from "@constants";
import { PlanetMoon } from "@interface";

async function createUranus() {
  const { material } = await createMaterial();
  const { geometrie } = createGeometrie();

  const uranus = new Mesh(geometrie, material);
  const name: PlanetMoon = "uranus";
  uranus.name = name;

  const uranusContainerGroup = new Group();
  uranusContainerGroup.position.x = planetInfo.uranus.distanceFromSun;
  uranusContainerGroup.add(uranus);

  return { uranus, uranusContainerGroup };
}

export { createUranus };
