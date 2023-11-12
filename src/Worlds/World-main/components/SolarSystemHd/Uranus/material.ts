import { MeshPhongMaterial, TextureLoader } from "three";
async function createMaterial() {
  const loader = new TextureLoader();
  const texturePlanet = await loader.loadAsync(
    "/src/assets/texture/hd/2k_uranus.jpg",
  );

  const material = new MeshPhongMaterial({
    map: texturePlanet,
  });

  return { material };
}

export { createMaterial };
