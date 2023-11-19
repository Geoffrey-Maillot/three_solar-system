import { MoonInfo, Planet, PlanetInfo } from "@interface";

export const planetInfo: Record<Planet, PlanetInfo> = {
  sun: {
    distanceFromSun: 0,
    sunAxisRotation: 0,
    selfRotation: 30,
    rayon:50
  },
  mercury: {
    distanceFromSun: 175,
    sunAxisRotation: 30, // 1°
    selfRotation: 30,
    rayon:25
  },
  venus: {
    distanceFromSun: 375,
    sunAxisRotation: 40, // 2°
    selfRotation: 30, 
    rayon:30
  },
  earth: {
    distanceFromSun: 600,
    sunAxisRotation: 50, // 3°
    selfRotation: 30,
    rayon:30
  },
  mars: {
    distanceFromSun: 800,
    sunAxisRotation: 60, // 4°
    selfRotation: 30,
    rayon:27.5
  },
  jupiter: {
    distanceFromSun: 1000,
    sunAxisRotation: 70, // 5°
    selfRotation: 30,
    rayon:45
  },
  saturne: {
    distanceFromSun: 1250,
    sunAxisRotation: 80, // 6°
    selfRotation: 30,
    rayon:40
  },
  uranus: {
    distanceFromSun: 1500,
    sunAxisRotation: 90, // 7°
    selfRotation: 30,
    rayon:35
  },
  neptune: {
    distanceFromSun: 1700,
    sunAxisRotation: 100, // 8°
    selfRotation: 30,
    rayon:35
  },
};

export const moonInfo: MoonInfo = {
  distanceFromEarth: 80,
  earthAxisRotation: 30,
  selfRotation: 30,
  rayon: 25
};
