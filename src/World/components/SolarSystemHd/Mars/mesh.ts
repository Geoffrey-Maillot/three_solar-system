import { Mesh } from "three";
import { createGeometrie } from "./geometrie";
import { createMaterial } from "./material";
import { planetInfo } from "@constants";

async function createMars() {
  const { material } = await createMaterial();
  const { geometrie } = createGeometrie();

  const mars = new Mesh(geometrie, material);
  mars.position.x = planetInfo.mars.distanceFromSun;
  return mars;
}

export { createMars };
