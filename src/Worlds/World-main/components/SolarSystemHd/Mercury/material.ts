import { MeshPhongMaterial, TextureLoader } from "three";

async function createMaterial() {
  const loader = new TextureLoader();
  const texture = await loader.loadAsync(
    "/src/assets/texture/hd/2k_mercury.jpg",
  );

  const material = new MeshPhongMaterial({
    map: texture,
  });

  return { material };
}

export { createMaterial };
