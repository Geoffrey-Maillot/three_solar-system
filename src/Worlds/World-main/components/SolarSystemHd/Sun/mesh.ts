import { Mesh } from 'three'
import {createGeometrie} from './geometrie'
import {createMaterial} from './material'
import { PlanetMoon } from '@interface'

async function createSun() {
  const {material} = await createMaterial()
  const {geometrie} = createGeometrie()

  const sun = new Mesh(geometrie, material)
  const name: PlanetMoon = "sun";
  sun.name = name

  return {sun}
}

export {createSun}