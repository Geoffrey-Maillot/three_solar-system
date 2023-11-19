import { Mesh } from "three";
import { createGeometrie } from "./geometrie";
import { createMaterial } from "./material";
import { planetInfo } from "@constants";
import { PlanetMoon } from "@interface";

async function createVenus() {
  const { material } = await createMaterial();
  const { geometrie } = createGeometrie();

  const venus = new Mesh(geometrie, material);
  venus.position.x = planetInfo.venus.distanceFromSun;
  const name: PlanetMoon = "venus";
  venus.name = name

  return venus;
}

export { createVenus };
