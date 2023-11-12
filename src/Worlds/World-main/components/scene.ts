import {Scene, TextureLoader, EquirectangularRefractionMapping, CubeUVReflectionMapping,CubeReflectionMapping,UVMapping,NearestFilter,RepeatWrapping, LinearFilter, LinearMipMapLinearFilter, LinearDisplayP3ColorSpace} from 'three'

function createScene() {
  const scene = new Scene()
  return scene
}

export {createScene}