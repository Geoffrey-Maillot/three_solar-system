import { AddCamera, CamerasList, PlanetCam } from "@interface";
import { PerspectiveCamera } from "three";

export class Cameras {
  private _cameras: CamerasList = {};
  constructor() {}

  public addCamera: AddCamera = (
    planet: PlanetCam,
    camera: PerspectiveCamera,
  ) => {
    const _cameras = {
      ...this._cameras,
      [planet]: camera,
    };
    this._cameras = _cameras;
  };

  public get cameras() {
    return this._cameras;
  }
}
