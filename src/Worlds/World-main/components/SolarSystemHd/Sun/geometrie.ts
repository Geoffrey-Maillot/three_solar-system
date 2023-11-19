import { planetInfo } from "@constants";
import { SphereGeometry } from "three";

function createGeometrie() {
  const geometrie = new SphereGeometry(planetInfo.sun.rayon);

  return { geometrie };
}

export { createGeometrie };
