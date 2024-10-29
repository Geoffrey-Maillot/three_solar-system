import { RaycasterEvent } from "@interface";
import {
  Raycaster,
  PerspectiveCamera,
  Object3DEventMap,
  Vector2,
  Object3D,
  Intersection,
} from "three";

class Raycast {
  private raycaster: Raycaster;
  private camera: PerspectiveCamera; // Ajouter des types camera selon le besoin
  private pointer = new Vector2();
  private objectList: Array<Object3D<Object3DEventMap>> | [];
  private _selectedObject: Intersection<Object3D<Object3DEventMap>> | null =
    null;
  private event: RaycasterEvent = () => {};

  constructor(
    objectList: Array<any>,
    camera: PerspectiveCamera,
    event?: RaycasterEvent,
  ) {
    this.objectList = objectList;
    this.camera = camera;
    if (event) {
      this.event = event;
    }

    this.raycaster = new Raycaster();
    // Au choix selon le besoin
    window.addEventListener("mousemove", (e) => this.onMouseMove(e), false);
    // window.addEventListener("click", () => this.onMouseMove, false);
  }

  onMouseMove(e: MouseEvent) {
    this.pointer.x = (e.clientX / window.innerWidth) * 2 - 1;
    this.pointer.y = -(e.clientY / window.innerHeight) * 2 + 1;

    this.raycaster.setFromCamera(this.pointer, this.camera);

    const intersects = this.raycaster.intersectObjects(this.objectList);

    if (intersects.length > 0) {
      this._selectedObject = intersects[0];
    } else {
      this._selectedObject = null;
    }

    this.event(this._selectedObject);
  }

  onMouseClick(e: MouseEvent) {
    this.pointer.x = (e.clientX / window.innerWidth) * 2 - 1;
    this.pointer.y = -(e.clientY / window.innerHeight) * 2 + 1;

    this.raycaster.setFromCamera(this.pointer, this.camera);

    const intersects = this.raycaster.intersectObjects(this.objectList);

    if (intersects.length > 0) {
      this._selectedObject = intersects[0];
    } else {
      this._selectedObject = null;
    }
    this.event(this._selectedObject);
  }

  get selectedObject() {
    return this._selectedObject;
  }
}

export { Raycast };
