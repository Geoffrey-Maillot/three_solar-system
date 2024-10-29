import { PlanetCam, PlanetMoon } from "@interface";
import { WorldMain } from "../World-main/World-main";
import { WorldCard } from "../World-card/World-card";
import { setCardPlanet } from "@feature";

class UI {
  private worldMain: WorldMain;
  private worldCard: WorldCard;
  private playPauseButton: HTMLInputElement;
  private renderTypeButton: HTMLInputElement;
  private settingsButton: HTMLDivElement;
  private songButton: HTMLInputElement;
  private fullScreenButton: HTMLInputElement;
  private cardPlanetInfo: HTMLDivElement;
  /**
   * Focus main camera on planet
   */
  private planetButtons: Array<HTMLDivElement>;
  /**
   * switch to planet camera
   */
  private planetSwitchInput: Array<HTMLInputElement>;

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
     * Card info planet
     */
    this.cardPlanetInfo = document.getElementById(
      "cardPlanetInfo",
    ) as HTMLDivElement;

    /**
     * Planets buttons focus main cam
     */
    const nodeListPlanet = document.querySelectorAll(
      "div.btn-planet",
    ) as NodeList;

    this.planetButtons = Array.from(nodeListPlanet) as Array<HTMLDivElement>;

    this.planetButtons.forEach((button) =>
      button.addEventListener("click", (e: Event) => {
        const planet = (e.currentTarget as HTMLDivElement).dataset.planet as
          | PlanetMoon
          | undefined;

        if (!planet) {
          throw new Error("button return no planet");
        }
        if (planet !== this.worldMain.selectedPlanetName) {
          this.changeCardPlanet(planet);
          this.worldMain.setFocusPlanet(planet);
          setCardPlanet(planet);
          this.changeButtonStyle(planet);
          this.cardPlanetInfo.classList.remove("is-visible");
          // uncheck other planet switch input
          this.planetSwitchInput.forEach((input) => {
            if (planet !== input.dataset.planet) {
              input.checked = false;
            }
          });
        }
      }),
    );

    /**
     * input switch to planet camera
     */
    const nodeListPlanetSwitchButton = document.querySelectorAll(
      "input#planet-switch",
    ) as NodeList;
    this.planetSwitchInput = Array.from(
      nodeListPlanetSwitchButton,
    ) as Array<HTMLInputElement>;

    const onSwitchPlanetCam = (e: Event) => {
      const selectedSolarSystem =
        this.worldMain.selectedSolarSystem === "solarSystemHd"
          ? "Hd"
          : "LowPoly";
      const planetCam = ((e.target as HTMLInputElement).dataset.planet +
        "Cam" +
        selectedSolarSystem) as PlanetCam;
      const camera = this.worldMain.selectedPlanetCam;

      if (planetCam === camera.name) {
        this.worldMain.setPlanetCam("mainCam");
        this.cardPlanetInfo.classList.remove("is-visible");
      } else {
        this.worldMain.setPlanetCam(planetCam);
        this.cardPlanetInfo.classList.add("is-visible");
      }
    };

    nodeListPlanetSwitchButton.forEach((input) =>
      input.addEventListener("change", onSwitchPlanetCam),
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
    const planet = this.worldMain.selectedPlanetName;
    this.worldMain.setFocusPlanet(planet);
    this.cardPlanetInfo.classList.remove("is-visible");
    // uncheck other planet switch input
    this.planetSwitchInput.forEach((input) => {
      input.checked = false;
    });
    this.changeCardPlanet(planet);
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
