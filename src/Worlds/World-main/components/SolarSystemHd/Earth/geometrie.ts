import { SphereGeometry } from "three";

function createGeometrie() {
  const geometrie = new SphereGeometry(50);

  return { geometrie };
}

export { createGeometrie };
