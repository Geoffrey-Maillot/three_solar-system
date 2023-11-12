import { Clock, MathUtils, PerspectiveCamera, Scene, WebGLRenderer, HemisphereLight, Mesh, BoxGeometry, MeshBasicMaterial, MeshPhongMaterial, AxesHelper, TextureLoader, Sphere, SphereGeometry } from 'three';
import { Sun } from '../World-main/components/SolarSystemHd/Sun/Sun'

class WorldCard {

  private canvas;
  private renderer;
  private scene;
  private camera;
  private planet: any
  private clock;
  private light;
  private loader;


  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas
    this.renderer = new WebGLRenderer({ canvas: this.canvas, alpha: true })
    this.renderer.setClearColor(0x000000, 0)
    this.renderer.setSize(canvas.clientWidth, canvas.clientHeight)
    this.scene = new Scene()
    this.camera = new PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 1000)
    this.camera.lookAt(0,0,0)
    this.camera.position.set(0, 0, 20)
    this.scene.add(this.camera)
    this.light = new HemisphereLight(0xffffff, 0xffffff, 2);
    this.scene.add(this.light)
    this.clock = new Clock()
    this.loader = new TextureLoader();
   const material = new MeshPhongMaterial({color: 'red'})
    const planet = new Mesh(new BoxGeometry(10,10), material)

    this.scene.add(planet)
 
  }

  public async loadPlanetHd() {
    //const texture = await this.loader.loadAsync("/src/assets/texture/hd/2k_sun.jpg");
    //const material = new MeshPhongMaterial({color: 'red'})
    //const planet = new Mesh(new BoxGeometry(10,10), material)

    //this.scene.add(planet)
  }

  public async loadPlanetLowPoly () {

  }

  animation(delta: number) {
    this.planet.rotation.y = + MathUtils.degToRad(15) * delta
  }

  render() {
    this.renderer.render(this.scene, this.camera)
  }

  start() {
    this.renderer.setAnimationLoop(() => {
      this.animation(this.clock.getDelta())
      this.render()
    })
  }

}

export { WorldCard }
