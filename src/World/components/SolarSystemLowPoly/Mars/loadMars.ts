import { Mesh, MeshPhysicalMaterial } from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';  

async function loadMarsPlanet() {

  const loader = new GLTFLoader()
 const marsData = await loader.loadAsync('/src/assets/model/low-poly/Mars.glb')
  
  const mars = marsData.scene.children[0] as Mesh
    (mars.material as MeshPhysicalMaterial).roughness = 0.8;
    (mars.material as MeshPhysicalMaterial).metalness = 0.9;
    (mars.material as MeshPhysicalMaterial).clearcoat = 0.5;

    mars.geometry.center()
    mars.position.setX(-800)

    return mars
}

export {loadMarsPlanet}