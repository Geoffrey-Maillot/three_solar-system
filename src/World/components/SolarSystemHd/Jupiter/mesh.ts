import { Mesh } from "three";
import { createGeometrie } from "./geometrie";
import { createMaterial } from "./material";
import { planetInfo } from "@constants";

async function createJupiter() {
  const { material } = await createMaterial();
  const { geometrie } = createGeometrie();

  const jupiter = new Mesh(geometrie, material);
  jupiter.position.x = planetInfo.jupiter.distanceFromSun;
  return jupiter;
}

export { createJupiter };
