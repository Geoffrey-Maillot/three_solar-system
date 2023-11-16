import { Planet, PlanetMoon } from "@interface";
import { WorldMain } from "../World-main/World-main";
import { WorldCard } from "../World-card/World-card";

class UI {
  private worldMain: WorldMain;
  private worldCard: WorldCard;
  private playPauseButton: HTMLInputElement;
  private scaleBbutton: HTMLInputElement;
  private renderTypeButton: HTMLInputElement;
  private settingsButton: HTMLDivElement;
  private songButton: HTMLInputElement;
  private fullScreenButton: HTMLInputElement;
  private planetButtons: Array<HTMLButtonElement>;

  constructor(worldMain: WorldMain, worldCard: WorldCard) {
    this.worldMain = worldMain;
    this.worldCard = worldCard;

    /**
     * play pause button
     */
    this.playPauseButton = document.getElementById(
      "btn-play",
    ) as HTMLInputElement;

    this.playPauseButton.addEventListener("change", (e: Event) => {
      const checked = (e.target as HTMLInputElement).checked;

      if (!checked) {
        worldMain.startSolarSystem();
      } else {
        worldMain.stopSolarSystem();
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

    this.renderTypeButton.addEventListener("change", this.changeSolarSystem);

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
        const planet = (e.target as HTMLButtonElement).dataset.planet as
          | PlanetMoon
          | undefined;

        if (!planet) {
          throw new Error("button return no planet");
        }
        if (planet !== this.worldMain.selectedPlanet) {
          this.changeCardPlanet(planet);
          this.changeFocusPlanet(planet);
        }
        this.changeButtonStyle(planet);
      }),
    );
  }

  changeButtonStyle(planet: string) {
    this.planetButtons.forEach((button) => {
      const buttonName = button.dataset.planet;
      if (buttonName === planet) {
        button.classList.add("is-active");
      } else {
        button.classList.remove("is-active");
      }
    });
  }

  changeSolarSystem = () => {
    this.worldMain.changeSolarSystem();
    const planet = this.worldMain.selectedPlanet;

    this.changeCardPlanet(planet);
  };

  changeFocusPlanet = (planet: PlanetMoon) => {
    this.worldMain.selectedPlanet = planet;
  };
  changeCardPlanet = (planet: PlanetMoon) => {
    if (this.worldMain.selectedSolarSystem === "solarSystemHd") {
      this.worldCard.loadPlanetHd(planet);
    } else {
      this.worldCard.loadPlanetLowPoly(planet);
    }
  };
}

export { UI };
