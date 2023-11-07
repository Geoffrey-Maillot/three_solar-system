import { WebGLRenderer, PerspectiveCamera, Scene } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

import { createRenderer } from './system/renderer'
import { Resizer } from './system/Resizer'
import { Loop } from './system/Loop'
import { createControls } from './system/controls';

import { createCamera } from './components/camera'
import { createScene } from './components/scene';
import { Updatable } from '../interface/libs/updatable';

import { SolarSystemHd } from './components/SolarSystemHd/SolarSytemHd';
import {SolarSystemLowPoly} from './components/SolarSystemLowPoly/SolarSystemLowPoly'





class World {
  private canvas: HTMLCanvasElement;
  private renderer: WebGLRenderer;
  private camera: PerspectiveCamera;
  private scene: Scene;
  private loop: Loop;
  private updatables: Array<Updatable>;
  private controls: OrbitControls;
  private solarSystemHd: SolarSystemHd
  private solarSystemLowPoly: SolarSystemLowPoly;


  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas
    this.camera = createCamera()
    this.renderer = createRenderer(this.canvas)
    this.scene = createScene()

    this.loop = new Loop(this.camera, this.scene, this.renderer)
    this.updatables = this.loop.updatables

    this.controls = createControls(this.camera, this.canvas, this.updatables)

    this.solarSystemHd = new SolarSystemHd(this.updatables)
    this.solarSystemLowPoly = new SolarSystemLowPoly(this.updatables)

    new Resizer(this.camera, this.renderer)
  }

  public async init() {
    await this.solarSystemHd.init()
    await this.solarSystemLowPoly.init()

    this.scene.add(this.solarSystemLowPoly)
    //this.scene.add(this.solarSystemHd)


  }

  render() {
    this.renderer.render(this.scene, this.camera)
  }

  start() {
    this.loop.start()
  }

  stop() {
    this.loop.stop()
  }


}

export { World }