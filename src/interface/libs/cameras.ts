import { PlanetMoon } from "@interface";
import { PerspectiveCamera } from "three";
import { SolarSystemInfo } from "./solar-system";

export type PlanetCam = `${PlanetMoon}Cam${SolarSystemInfo}` | "mainCam";

export type CamerasList = Partial<Record<PlanetCam, PerspectiveCamera>>;

export type AddCamera = (planet: PlanetCam, camera: PerspectiveCamera) => void;

export const cameras: CamerasList = {};
