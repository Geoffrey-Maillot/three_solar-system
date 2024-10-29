import { Group, Mesh } from "three";
import { createGeometrie } from "./geometrie";
import { createMaterial } from "./material";
import { planetInfo } from "@constants";
import { PlanetMoon } from "@interface";

async function createJupiter() {
  const { material } = await createMaterial();
  const { geometrie } = createGeometrie();

  const jupiter = new Mesh(geometrie, material);
  const name: PlanetMoon = "jupiter";
  jupiter.name = name;

  const jupiterContainerGroup = new Group();
  jupiterContainerGroup.position.x = planetInfo.jupiter.distanceFromSun;
  jupiterContainerGroup.add(jupiter);

  return { jupiter, jupiterContainerGroup };
}

export { createJupiter };
