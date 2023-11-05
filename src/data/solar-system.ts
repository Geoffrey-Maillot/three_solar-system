import { SolarSystem } from "../interface/index";

/**
 * diameter en km
 * sunDistance en km
 * temperature en °c
 * revolution en jour decimal
 * rotation en jour decimal
 */
export const solarSystem: Array<SolarSystem> = [{
	name: "Mars, la planète rouge",
	identityCard: {
		diameter: 6800,
		sunDistance: 228000000,
		temperature: 63,
		revolution: 687,
		rotation: 24.67,
		satellites: 2,
		discovery: "Par Galilée en 1610"
	},
	descriptions: [
		{
			title: "La planète rouge",
			body: "Avec Mercure, Vénus et la terre, Mars est l'une des 4 planètes rocheuses du Système solaire.\n  Elle est appellé la planette rouge car sa surface rocailleuse et désertique a une couleur rougeâtre (due à la présence de fer)"
		}, {
			title: "Composition de l'atmosphère",
			body: "95% de dioxide de carbonne, 3% de diazote, un peu d'oxygène, de vapeur d'eau et d'autres gaz.\n Ce mélange gazeux n'est pas respirable par l'homme.  "
		},
		{
			title: "Olympus Mons",
			body: "C'est le plus grand volcan du Système solaire. Il mesure 600 km de diamètre et 25 km d'altitude.\n C'est près de 3 fois plus que l'Everest, le plus haut sommet de la Terre (8848m). Olympus Mons est un volcan éteint."
		},
		{
			title: "Valles Marineris",
			body: "C'est un immense canyon de 120 km de large et de 6 km de profondeur.\n Il s'étend sur près de de 4000 km. \n Cest 5 fois plus gran que le plus grand canyon de la Terre, situé aux États-unis (long de 800 km environ)"
		}
	]
},
{
	name: "La Terre, notre planète",
	identityCard: {
		diameter: 12800,
		sunDistance: 150000000,
		temperature: 15,
		revolution: 365.26,
		rotation: 23.93,
		satellites: 1,
		discovery: ""
	},
	descriptions: [
		{
			title: "La planète bleue",
			body: "Vue de l'espace, la Terre ressemble à une grosse boule bleue. Cette couleur est due aux grandes étendues d'eau qui la recouvrent.\n Les océans et les mers représentent 71 % de la surface de la planète. \n La Terre est la seule planète connue où de l'eau liquide coule sur la surface."
		},
		{
			title: "Une planète rocheuse",
			body: "La terre est la 3° planète du Système solaire, située entre Vénus et Mars.\n C'est la plus grande des planètes rocheuses (ou planètes telluriques).\n La température moyenne est de 15 °C. Mais le climat est très variable en fonction des endroits"
}, {
		title: "Un aimant géant",
		body: "La Terre possède un champ magnétique très fort. Il la protège des vents solaires, des courants de particules électriques très puissants produits par le Soleil"
}, {
		title: "Une planète et son satellite",
		body: "La Terre est accompagnée d'un satellite: la Lune.\n Celle-ci fait plus d'un quart de la taille de la Terre soit 3500 km." 
}
	]
}]

