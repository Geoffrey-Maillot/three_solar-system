import { Mesh } from 'three'
import {createGeometrie} from './geometrie'
import {createMaterial} from './material'

async function createSun() {
  const {material} = await createMaterial()
  const {geometrie} = createGeometrie()

  const sun = new Mesh(geometrie, material)

  return {sun}
}

export {createSun}