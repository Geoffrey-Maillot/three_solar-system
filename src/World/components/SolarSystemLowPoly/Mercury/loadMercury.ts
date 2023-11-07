import { Mesh, MeshPhysicalMaterial } from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';  

async function loadMercuryPlanet() {

  const loader = new GLTFLoader()
 const mercuryData = await loader.loadAsync('/src/assets/model/low-poly/Mercury.glb')
  
  const mercury = mercuryData.scene.children[0] as Mesh
    (mercury.material as MeshPhysicalMaterial).roughness = 0.8;
    (mercury.material as MeshPhysicalMaterial).metalness = 0.9;
        (mercury.material as MeshPhysicalMaterial).clearcoat = 0.5;

    mercury.geometry.center()
    mercury.position.setX(-150)

    return mercury
}

export {loadMercuryPlanet}