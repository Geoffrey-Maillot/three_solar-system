import { planetInfo } from "@constants";
import { SphereGeometry } from "three";

function createGeometrie() {
  const geometrie = new SphereGeometry(planetInfo.neptune.rayon);

  return { geometrie };
}

export { createGeometrie };
