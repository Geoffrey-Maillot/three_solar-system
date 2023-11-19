import { planetInfo } from "@constants";
import { SphereGeometry } from "three";

function createGeometrie() {
  const geometrie = new SphereGeometry(planetInfo.jupiter.rayon);

  return { geometrie };
}

export { createGeometrie };
