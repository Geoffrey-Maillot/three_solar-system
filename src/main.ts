import {World} from './World/World';


async function startWorld () {
  const canvas = document.getElementById('canvas') as HTMLCanvasElement;

  const world = new World(canvas)

  await world.init()

  world.start()
}

function init () {
  try {
      startWorld()
  } catch (error) {
    console.error(error)
  }
}

document.addEventListener('DOMContentLoaded', init)