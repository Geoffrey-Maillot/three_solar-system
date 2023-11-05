import { MeshPhongMaterial, TextureLoader } from "three";

async function createMaterial() {
  const loader = new TextureLoader()
  const texture = await loader.loadAsync('/src/assets/texture/hd/2k_sun.jpg')

  const material = new MeshPhongMaterial({
    emissive: 0xfce803,
    emissiveIntensity: 1.2,
    emissiveMap: texture,
  })

  return { material }
}

export { createMaterial }