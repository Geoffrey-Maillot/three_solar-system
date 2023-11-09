import { MeshPhongMaterial, MultiplyOperation, TextureLoader } from "three";

async function createMaterial() {
  const loader = new TextureLoader();
  const textureDayMap = await loader.loadAsync(
    "/src/assets/texture/hd/2k_earth_daymap.jpg",
  );

  const material = new MeshPhongMaterial({
    map: textureDayMap,
  });

  return { material };
}

export { createMaterial };
