import { Planet } from "@interface";
import { WorldMain } from "./World-main";

class UI {
  private world;
  private playPauseButton: HTMLInputElement;
  private scaleBbutton: HTMLInputElement;
  private renderTypeButton: HTMLInputElement;
  private settingsButton: HTMLDivElement;
  private songButton: HTMLInputElement;
  private fullScreenButton: HTMLInputElement;
  private planetButtons: Array<HTMLButtonElement>;

  constructor(world: WorldMain) {
    this.world = world;

    /**
     * play pause button
     */
    this.playPauseButton = document.getElementById(
      "btn-play",
    ) as HTMLInputElement;

    this.playPauseButton.addEventListener("change", (e: Event) => {
      const checked = (e.target as HTMLInputElement).checked;

      if (!checked) {
        world.startSolarSystem();
      } else {
        world.stopSolarSystem();
      }
    });

    /**
     * Scale button
     */
    this.scaleBbutton = document.getElementById(
      "btn-scale",
    ) as HTMLInputElement;

    this.scaleBbutton.addEventListener("change", (e: Event) => {
      console.dir(e);
    });

    /**
     * Render type button
     */
    this.renderTypeButton = document.getElementById(
      "btn-render-type",
    ) as HTMLInputElement;

    this.renderTypeButton.addEventListener("change", (e: Event) => {
      console.dir(e);
    });

    /**
     * Settings button
     */
    this.settingsButton = document.getElementById(
      "btn-settings",
    ) as HTMLDivElement;

    this.settingsButton.addEventListener("click", (e: Event) => {
      console.dir(e);
    });

    /**
     * Song button
     */
    this.songButton = document.getElementById("btn-song") as HTMLInputElement;

    this.songButton.addEventListener("change", (e: Event) => {
      console.dir(e);
    });

    /**
     * Fullscreen button
     */
    this.fullScreenButton = document.getElementById(
      "btn-fullscreen",
    ) as HTMLInputElement;

    this.fullScreenButton.addEventListener("change", (e: Event) => {
      console.dir(e);
    });

    /**
     * Planets buttons
     */
    const nodeListPlanet = document.querySelectorAll(
      "button.btn-planet",
    ) as NodeList;
    this.planetButtons = Array.from(nodeListPlanet) as Array<HTMLButtonElement>;
    console.log(this.planetButtons);

    this.planetButtons.forEach((button) =>
      button.addEventListener("click", (e: Event) => {
        const { planet } = (e.target as HTMLButtonElement).dataset;
        console.log(planet);
      }),
    );
  }
}

export { UI };
