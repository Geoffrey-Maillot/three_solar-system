import { AmbientLight } from "three";

function createLight () {
  const universeLight = new AmbientLight(0xffffff, 10)

  return universeLight
}
export {createLight}