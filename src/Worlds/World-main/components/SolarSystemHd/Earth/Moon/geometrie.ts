import { moonInfo } from "@constants";
import { SphereGeometry } from "three";

function createGeometrie() {
  const geometrie = new SphereGeometry(moonInfo.rayon);

  return { geometrie };
}

export { createGeometrie };
