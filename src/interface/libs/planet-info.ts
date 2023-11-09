export type SolarSystemName = "solarSystemHd" | "solarSystemLowPoly";

export type Planet =
  | "sun"
  | "earth"
  | "jupiter"
  | "mars"
  | "uranus"
  | "mercury"
  | "neptune"
  | "saturne"
  | "venus";

export interface PlanetInfo {
  distanceFromSun: number;
  sunAxisRotation: number;
  selfRotation: number;
}

export interface MoonInfo {
  distanceFromEarth: number;
  earthAxisRotation: number;
  selfRotation: number;
}
