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
