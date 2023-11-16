import { MoonInfo, Planet, PlanetInfo } from "@interface";

export const planetInfo: Record<Planet, PlanetInfo> = {
  sun: {
    distanceFromSun: 0,
    sunAxisRotation: 0,
    selfRotation: 10,
  },
  earth: {
    distanceFromSun: 579,
    sunAxisRotation: 18,
    selfRotation: 30,
  },
  jupiter: {
    distanceFromSun: 7783,
    sunAxisRotation: 20,
    selfRotation: 28,
  },
  mars: {
    distanceFromSun: 2279,
    sunAxisRotation: 60,
    selfRotation: 37,
  },
  uranus: {
    distanceFromSun: 1250,
    sunAxisRotation: 20,
    selfRotation: 33,
  },
  mercury: {
    distanceFromSun: 150,
    sunAxisRotation: 40,
    selfRotation: 40,
  },
  neptune: {
    distanceFromSun: 1300,
    sunAxisRotation: 20,
    selfRotation: 20,
  },
  saturne: {
    distanceFromSun: 1100,
    sunAxisRotation: 20,
    selfRotation: 25,
  },
  venus: {
    distanceFromSun: 400,
    sunAxisRotation: 18,
    selfRotation: 25,
  },
};

export const moonInfo: MoonInfo = {
  distanceFromEarth: 80,
  earthAxisRotation: 80,
  selfRotation: 10,
};
