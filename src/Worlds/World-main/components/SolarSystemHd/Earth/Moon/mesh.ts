import { Group, Mesh } from "three";
import { createGeometrie } from "./geometrie";
import { createMaterial } from "./material";
import { moonInfo } from "@constants";
import { PlanetMoon } from "@interface";

async function createMoon() {
  const { material } = await createMaterial();
  const { geometrie } = createGeometrie();

  const moon = new Mesh(geometrie, material);
  moon.scale.set(0.4, 0.4, 0.4);
  const name: PlanetMoon = "moon";
  moon.name = name;

  const moonContainerGroup = new Group();
  moonContainerGroup.position.x = moonInfo.distanceFromEarth;
  moonContainerGroup.add(moon);

  return { moon, moonContainerGroup };
}

export { createMoon };
