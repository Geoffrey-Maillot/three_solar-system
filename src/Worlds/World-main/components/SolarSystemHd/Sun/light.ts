import { PointLight } from "three";

function createLight() {
  const light = new PointLight(0xffffff, 1, 1000, 0);

  return light;
}

export { createLight };
