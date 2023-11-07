import { Mesh, MeshPhysicalMaterial, Vector3 } from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';  

async function loadEarthPlanet() {
  const loader = new GLTFLoader();
  const earthData = await loader.loadAsync('/src/assets/model/low-poly/Earth.glb');

  const earth = earthData.scene.children[0] as Mesh;
  (earth.material as MeshPhysicalMaterial).roughness = 0.8;
  (earth.material as MeshPhysicalMaterial).metalness = 0.9;
  (earth.material as MeshPhysicalMaterial).clearcoat = 0.5;

  earth.geometry.center()
  earth.position.x = -600

  return earth
}

export {loadEarthPlanet}