import { Mesh } from "three";
import { createGeometrie } from "./geometrie";
import { createMaterial } from "./material";
import { planetInfo } from "@constants";
import { PlanetMoon } from "@interface";

async function createJupiter() {
  const { material } = await createMaterial();
  const { geometrie } = createGeometrie();

  const jupiter = new Mesh(geometrie, material);
  jupiter.position.x = planetInfo.jupiter.distanceFromSun;
  const name: PlanetMoon = "jupiter";
  jupiter.name = name
  return jupiter;
}

export { createJupiter };
