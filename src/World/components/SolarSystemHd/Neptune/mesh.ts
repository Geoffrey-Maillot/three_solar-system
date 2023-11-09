import { Mesh } from "three";
import { createGeometrie } from "./geometrie";
import { createMaterial } from "./material";
import { planetInfo } from "@constants";

async function createNeptune() {
  const { material } = await createMaterial();
  const { geometrie } = createGeometrie();

  const neptune = new Mesh(geometrie, material);
  neptune.position.x = planetInfo.neptune.distanceFromSun;
  return neptune;
}

export { createNeptune };
