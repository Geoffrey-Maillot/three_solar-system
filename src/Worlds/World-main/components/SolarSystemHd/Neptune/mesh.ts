import { Mesh } from "three";
import { createGeometrie } from "./geometrie";
import { createMaterial } from "./material";
import { planetInfo } from "@constants";
import { PlanetMoon } from "@interface";

async function createNeptune() {
  const { material } = await createMaterial();
  const { geometrie } = createGeometrie();

  const neptune = new Mesh(geometrie, material);
  neptune.position.x = planetInfo.neptune.distanceFromSun;
  const name: PlanetMoon = "neptune";
  neptune.name = name
  return neptune;
}

export { createNeptune };
