/**
 * Fichier de typage pour la partie interface 
 */

interface Description {
  title: string;
  body: string;
}

interface IdentityCard {
  diameter: number;
  sunDistance: number;
  temperature: number;
  revolution: number;
  rotation: number;
  satellites: number;
  discovery: string;
}

export interface SolarSystem {
  name: string;
  identityCard: IdentityCard;
  descriptions: Array<Description>;
}
