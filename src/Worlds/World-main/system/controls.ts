import { PerspectiveCamera } from "three";

import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { Updatable, UpdatableParams } from "@interface";
import { degToRad } from "three/src/math/MathUtils.js";

export function createControls(
  camera: PerspectiveCamera,
  canvas: HTMLCanvasElement,
  updatables: Array<Updatable>,
) {
  const controls = new OrbitControls(camera, canvas);

  //controls.enableDamping = true;
  //controls.minDistance = 70;
  //controls.maxDistance = 1500;
  //controls.minPolarAngle = degToRad(45);
  //controls.maxAzimuthAngle = degToRad(90);
  //controls.minAzimuthAngle = degToRad(180);

  const tick = ({ delta }: UpdatableParams) => {
    controls.update(delta);
  };

  updatables.push(tick);

  return controls;
}

/**
 * configurer les limites du control
 * - zoom min
 * - zoom max (définir au passe le far clipping de la caméra)
 * - limtite X
 * - limtite Y
 */

/**
 * Fonction Zoom Planet
 * On sauvegarde le state du control
 * On stop l'animation des planètes
 * On récupère la distance entre la caméra et la cible (.getDistance())
 * Zoom de la distance récupéré - Le rayon de la planète - la distance à laquelle on veut placer la caméra de la planète (si la distance est récupérer à partir du centre de la planète sinon on déduit juste la distance à laquelle on veut placer la caméra)
 * On désactive le zoom in / out
 * On Affiche un bouton back
 * Au click, on reviens à la position initial (méthode .reset())
 * On relance l'animation des planètes
 */
