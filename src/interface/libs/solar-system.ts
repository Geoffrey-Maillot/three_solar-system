/**
 * Fichier de typage pour la partie interface
 */

interface Description {
  title: string;
  body: string;
}

interface IdentityCard {
  diameter: number;
  sunDistance: string;
  temperature: number;
  revolution: number;
  rotation: number;
  satellites: number;
  discovery: string;
}

export interface SolarSystemInfoPlanet {
  name: string;
  identityCard: IdentityCard;
  descriptions: Array<Description>;
}

export type SolarSystemInfo = "LowPoly" | "Hd";
