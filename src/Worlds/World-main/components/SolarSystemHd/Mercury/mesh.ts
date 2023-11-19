import { Mesh } from "three";
import { createGeometrie } from "./geometrie";
import { createMaterial } from "./material";
import { planetInfo } from "@constants";
import { PlanetMoon } from "@interface";

async function createMercury() {
  const { material } = await createMaterial();
  const { geometrie } = createGeometrie();

  const mercury = new Mesh(geometrie, material);
  mercury.position.x = planetInfo.mercury.distanceFromSun;
  const name: PlanetMoon = "mercury";
  mercury.name = name
  return mercury;
}

export { createMercury };
