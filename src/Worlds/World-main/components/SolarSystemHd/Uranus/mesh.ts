import { Mesh } from "three";
import { createGeometrie } from "./geometrie";
import { createMaterial } from "./material";
import { planetInfo } from "@constants";
import { PlanetMoon } from "@interface";

async function createUranus() {
  const { material } = await createMaterial();
  const { geometrie } = createGeometrie();

  const uranus = new Mesh(geometrie, material);
  uranus.position.x = planetInfo.uranus.distanceFromSun;
  const name: PlanetMoon = "uranus";
  uranus.name = name;

  return uranus;
}

export { createUranus };
