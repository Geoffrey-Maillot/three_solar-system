import { Mesh, MeshPhysicalMaterial } from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';  

async function loadUranusPlanet() {

  const loader = new GLTFLoader()
 const uranusData = await loader.loadAsync('/src/assets/model/low-poly/Uranus.glb')
  
  const uranus = uranusData.scene.children[0] as Mesh
    (uranus.material as MeshPhysicalMaterial).roughness = 0.8;
    (uranus.material as MeshPhysicalMaterial).metalness = 0.9;
        (uranus.material as MeshPhysicalMaterial).clearcoat = 0.5;

    uranus.geometry.center()
    uranus.position.setX(-1250)

    return uranus
}

export {loadUranusPlanet}