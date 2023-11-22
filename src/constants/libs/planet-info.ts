import { MoonInfo, Planet, PlanetInfo } from "@interface";

export const planetInfo: Record<Planet, PlanetInfo> = {
  sun: {
    distanceFromSun: 0,
    sunAxisRotation: 0,
    selfRotation: 30,
    rayon: 1000,
  },
  mercury: {
    distanceFromSun: 1800,
    sunAxisRotation: 30, // 1°
    selfRotation: 30,
    rayon: 50,
  },
  venus: {
    distanceFromSun: 2500,
    sunAxisRotation: 40, // 2°
    selfRotation: 30,
    rayon: 100,
  },
  earth: {
    distanceFromSun: 3200,
    sunAxisRotation: 50, // 3°
    selfRotation: 30,
    rayon: 100,
  },
  mars: {
    distanceFromSun: 3900,
    sunAxisRotation: 60, // 4°
    selfRotation: 30,
    rayon: 70,
  },
  jupiter: {
    distanceFromSun: 4900,
    sunAxisRotation: 70, // 5°
    selfRotation: 30,
    rayon: 400,
  },
  saturne: {
    distanceFromSun: 6500,
    sunAxisRotation: 80, // 6°
    selfRotation: 30,
    rayon: 350,
  },
  uranus: {
    distanceFromSun: 7700,
    sunAxisRotation: 90, // 7°
    selfRotation: 30,
    rayon: 200,
  },
  neptune: {
    distanceFromSun: 8700,
    sunAxisRotation: 100, // 8°
    selfRotation: 30,
    rayon: 200,
  },
};

export const moonInfo: MoonInfo = {
  distanceFromEarth: 200,
  earthAxisRotation: 30,
  selfRotation: 30,
  rayon: 50,
};
