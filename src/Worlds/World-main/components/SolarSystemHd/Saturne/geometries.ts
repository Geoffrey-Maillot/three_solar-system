import { planetInfo } from "@constants";
import { RingGeometry, SphereGeometry } from "three";

function createGeometrie() {
  const geometriePlanet = new SphereGeometry(planetInfo.saturne.rayon);
  const geomerieRing = new RingGeometry(planetInfo.saturne.rayon * 1.2, planetInfo.saturne.rayon * 2);

  return { geometriePlanet, geomerieRing };
}

export { createGeometrie };
