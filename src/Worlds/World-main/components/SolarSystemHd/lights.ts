import { DirectionalLight, HemisphereLight } from "three";

function createLight() {
  const universeLightLeft = new DirectionalLight(0xffffff, 4);
  const universeLightRight = universeLightLeft.clone();
  const hemisphereLight = new HemisphereLight(0xffffff, 0xffffff, 2);

  universeLightLeft.position.set(-1000, 0, 0);
  universeLightRight.position.set(1000, 0, 0);

  return { universeLightLeft, universeLightRight, hemisphereLight };
}
export { createLight };
