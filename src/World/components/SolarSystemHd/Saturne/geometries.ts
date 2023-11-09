import { RingGeometry, SphereGeometry } from "three";

function createGeometrie() {
  const geometriePlanet = new SphereGeometry(50);
  const geomerieRing = new RingGeometry(70, 100);

  return { geometriePlanet, geomerieRing };
}

export { createGeometrie };
