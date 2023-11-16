import { WorldMain } from "./Worlds/World-main/World-main";
import { WorldCard } from "./Worlds/World-card/World-card";
import { UI } from "./Worlds/UI/UI";

async function startWorld() {
  const canvas = document.getElementById("c-main") as HTMLCanvasElement;
  const canvasCard = document.getElementById("c-card") as HTMLCanvasElement;

  const worldMain = new WorldMain(canvas);
  const worldCard = new WorldCard(canvasCard);

  await worldMain.init();
  const planet = worldMain.selectedPlanet;
  const solarSystem = worldMain.selectedSolarSystem;

  (await solarSystem) === "solarSystemHd"
    ? await worldCard.loadPlanetHd(planet)
    : await worldCard.loadPlanetLowPoly(planet);

  new UI(worldMain, worldCard);

  worldMain.start();
  worldCard.start();
}

function init() {
  try {
    startWorld();
  } catch (error) {
    console.error(error);
  }
}

document.addEventListener("DOMContentLoaded", init);
