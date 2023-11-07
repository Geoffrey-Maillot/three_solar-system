import { Mesh, MeshPhysicalMaterial } from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';  

async function loadSaturnePlanet() {

  const loader = new GLTFLoader()
 const SaturneData = await loader.loadAsync('/src/assets/model/low-poly/Saturne.glb')
  
  const Saturne = SaturneData.scene.children[0] as Mesh
    (Saturne.material as MeshPhysicalMaterial).roughness = 0.8;
    (Saturne.material as MeshPhysicalMaterial).metalness = 0.9;
    (Saturne.material as MeshPhysicalMaterial).clearcoat = 0.5;

    Saturne.geometry.center()
    Saturne.position.setX(-1100)

    return Saturne
}

export {loadSaturnePlanet}