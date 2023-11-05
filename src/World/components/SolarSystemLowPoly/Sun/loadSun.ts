import { MTLLoader } from 'three/addons/loaders/MTLLoader.js';
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';

async function loadSun() {
  const loaderM = new MTLLoader()
  const loaderB = new OBJLoader()

  const sunMaterial = await loaderM.loadAsync("/src/assets/model/low-poly/Sun.mtl")
  sunMaterial.preload()
  loaderB.setMaterials(sunMaterial)
  const sunGroup = await loaderB.loadAsync("/src/assets/model/low-poly/Sun.obj")
  const sun = sunGroup.children[0]
  console.log(sun)
  return {sun}
}

export {loadSun}