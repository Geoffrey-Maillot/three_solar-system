import { Mesh } from "three";
import { createGeometrie } from "./geometrie";
import { createMaterial } from "./material";
import { planetInfo } from "@constants";

async function createMercury() {
  const { material } = await createMaterial();
  const { geometrie } = createGeometrie();

  const mercury = new Mesh(geometrie, material);
  mercury.position.x = planetInfo.mercury.distanceFromSun;
  return mercury;
}

export { createMercury };
