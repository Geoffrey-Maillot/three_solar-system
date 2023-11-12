import { WebGLRenderer } from 'three'

function createRenderer(canvas: HTMLCanvasElement) {
  const renderer = new WebGLRenderer({ antialias: true, canvas, alpha: true })
  renderer.setClearColor(0x000000, 0);

  return renderer

}

export { createRenderer }