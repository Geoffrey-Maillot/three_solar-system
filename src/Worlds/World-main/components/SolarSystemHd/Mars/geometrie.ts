import { planetInfo } from "@constants";
import { SphereGeometry } from "three";

function createGeometrie() {
  const geometrie = new SphereGeometry(planetInfo.mars.rayon);

  return { geometrie };
}

export { createGeometrie };
