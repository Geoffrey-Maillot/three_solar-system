import { PlanetMoon, SolarSystemInfoPlanet } from "@interface";
import { solarSystem } from "../../../data/solar-system";

const getDomElement = () => {
  const cardElement = document.getElementById("card") as HTMLDivElement;
  const nameElement = cardElement.querySelector(
    "#planet-name",
  ) as HTMLDivElement;
  const diametreElement = cardElement.querySelector(
    "#planet-diametre",
  ) as HTMLDivElement;
  const distanceElement = cardElement.querySelector(
    "#planet-distance",
  ) as HTMLDivElement;
  const tempElement = cardElement.querySelector(
    "#planet-temperature",
  ) as HTMLDivElement;
  const revolutionElement = cardElement.querySelector(
    "#planet-revolution",
  ) as HTMLDivElement;
  const rotationElement = cardElement.querySelector(
    "#planet-rotation",
  ) as HTMLDivElement;
  const satelliteElement = cardElement.querySelector(
    "#planet-satellite",
  ) as HTMLDivElement;

  const carouselElement = cardElement.querySelector(
    "#carousel",
  ) as HTMLDivElement;
  const slideElement = document.getElementById("slide") as HTMLDivElement;

  return {
    nameElement,
    diametreElement,
    distanceElement,
    tempElement,
    revolutionElement,
    rotationElement,
    satelliteElement,
    carouselElement,
    slideElement,
  } as const;
};

export const setCardPlanet = (name: PlanetMoon) => {
  const planet: SolarSystemInfoPlanet = solarSystem[name];

  const {
    nameElement,
    diametreElement,
    distanceElement,
    tempElement,
    revolutionElement,
    rotationElement,
    satelliteElement,
    carouselElement,
    slideElement,
  } = getDomElement();

  // Caractéristique
  nameElement.innerText = planet.name;
  diametreElement.innerText = planet.identityCard.diameter.toString();
  //distanceElement.innerText = planet.identityCard.distance
  tempElement.innerText = planet.identityCard.temperature.toString();
  revolutionElement.innerText = planet.identityCard.revolution.toString();
  rotationElement.innerText = planet.identityCard.rotation.toString();
  satelliteElement.innerText = planet.identityCard.satellites.toString();

  // Supprime le contenu du carrousel
  carouselElement.innerHTML = "";

  planet.descriptions.forEach((description, i, arr) => {
    const slide = slideElement.cloneNode(true) as HTMLDivElement;
    slide.style.display = "block";
    slide.id = "slide" + i.toString();

    const slideTitle = slide.querySelector("#slide-title") as HTMLDivElement;
    const slideBody = slide.querySelector("#slide-body") as HTMLDivElement;
    const links = Array.from(
      slide.querySelectorAll("a"),
    ) as Array<HTMLAnchorElement>;

    // link slide
    const backSLide = i === 0 ? arr.length - 1 : i - 1;
    const forwardSLide = i === arr.length - 1 ? 0 : i + 1;
    links[0].href = "#slide" + backSLide;
    links[1].href = "#slide" + forwardSLide;

    // title, body
    slideTitle.innerText = description.title;
    slideBody.innerText = description.body;

    carouselElement.appendChild(slide);
  });
};
