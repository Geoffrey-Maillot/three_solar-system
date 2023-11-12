import { DoubleSide, MeshPhongMaterial, TextureLoader } from "three";
async function createMaterial() {
  const loader = new TextureLoader();
  const texturePlanet = await loader.loadAsync(
    "/src/assets/texture/hd/2k_saturn.jpg",
  );
  const textureRing = await loader.loadAsync(
    "/src/assets/texture/hd/2k_saturn_ring_alpha.png",
  );

  const materialPlanet = new MeshPhongMaterial({
    map: texturePlanet,
  });

  const materialRing = new MeshPhongMaterial({
    map: textureRing,
    side: DoubleSide,
  });

  return { materialPlanet, materialRing };
}

export { createMaterial };
