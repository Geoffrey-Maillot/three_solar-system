import { PointLight } from "three";

function createLight() {
  const light = new PointLight(0x000000, 1000, 10000, 0)
    

  return light
}

export {createLight}