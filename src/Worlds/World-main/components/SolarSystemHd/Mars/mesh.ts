import { Mesh } from "three";
import { createGeometrie } from "./geometrie";
import { createMaterial } from "./material";
import { planetInfo } from "@constants";
import { PlanetMoon } from "@interface";

async function createMars() {
  const { material } = await createMaterial();
  const { geometrie } = createGeometrie();

  const mars = new Mesh(geometrie, material);
  mars.position.x = planetInfo.mars.distanceFromSun;
   const name: PlanetMoon = "mars";
    mars.name = name
  return mars;
}

export { createMars };
