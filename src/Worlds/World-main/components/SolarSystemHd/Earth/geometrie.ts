import { planetInfo } from "@constants";
import { SphereGeometry } from "three";

function createGeometrie() {
  const geometrie = new SphereGeometry(planetInfo.earth.rayon);

  return { geometrie };
}

export { createGeometrie };
