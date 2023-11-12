import { Mesh } from "three";
import { createGeometrie } from "./geometrie";
import { createMaterial } from "./material";
import { planetInfo } from "@constants";

async function createVenus() {
  const { material } = await createMaterial();
  const { geometrie } = createGeometrie();

  const venus = new Mesh(geometrie, material);
  venus.position.x = planetInfo.venus.distanceFromSun;

  return venus;
}

export { createVenus };
