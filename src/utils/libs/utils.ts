import { Object3D, Object3DEventMap, Vector3 } from "three";

/**
 * Récupère la position d'un objet par rapport à la Scene
 */
export const getPositionFormMatrixWorld = (
  object: Object3D<Object3DEventMap>,
) => {
  const position = new Vector3();
  return position.setFromMatrixPosition(object.matrixWorld);
};

const diamètreSphereModel = 100;
/**
 * Scale les modeles de planètes importée à l'échelle des planètes créer avec les SphereGeometry
 */
export const scaleSphereModel = (rayon: number): number =>
  (rayon * 2) / diamètreSphereModel;

/**
 * Place les camera des planètes en foncion de leur rayon
 */
export const setDistancePlanetCamera = (rayon: number): number => {
  const diamètre = rayon * 2;
  const factorDistance = 1.4;
  return diamètre * factorDistance;
};
