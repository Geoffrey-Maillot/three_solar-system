import { Mesh } from "three";
import { createGeometrie } from "./geometrie";
import { createMaterial } from "./material";
import { planetInfo } from "@constants";
import { PlanetMoon } from '@interface'

async function createEarth() {
  const { material } = await createMaterial();
  const { geometrie } = createGeometrie();

  const earth = new Mesh(geometrie, material);
  earth.position.x = planetInfo.earth.distanceFromSun;
  const name: PlanetMoon = "earth"
  earth.name = name
  return earth;
}

export { createEarth };
