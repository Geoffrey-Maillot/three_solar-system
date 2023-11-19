import { planetInfo } from "@constants";
import { SphereGeometry } from "three";

function createGeometrie() {
  const geometrie = new SphereGeometry(planetInfo.venus.rayon);

  return { geometrie };
}

export { createGeometrie };
