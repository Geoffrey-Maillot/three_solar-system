import { WorldMain } from "./Worlds/World-main/World-main";
import { WorldCard } from "./Worlds/World-card/World-card";

async function startWorld() {
  const canvas = document.getElementById("c-main") as HTMLCanvasElement;
  const canvasCard = document.getElementById("c-card") as HTMLCanvasElement;

  const worldMain = new WorldMain(canvas);
  const worldCard = new WorldCard(canvasCard);

  await worldMain.init();
  await worldCard.loadPlanetHd("sun");
  await worldCard.loadPlanetLowPoly("sun");

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
