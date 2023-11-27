import { PlanetMoon } from "@interface";
import { PerspectiveCamera } from "three";

export type PlanetCam = `${PlanetMoon}Cam` | "mainCam";

export type CamerasList = Partial<Record<PlanetCam, PerspectiveCamera>>;

export type AddCamera = (planet: PlanetCam, camera: PerspectiveCamera) => void;

export const cameras: CamerasList = {};
