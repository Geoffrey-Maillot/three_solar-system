import { PlanetMoon, SolarSystemInfoPlanet } from "@interface";

/**
 * diameter en km
 * sunDistance en km
 * temperature en °c
 * revolution en jour decimal
 * rotation en jour decimal
 */

export const solarSystem: Record<PlanetMoon, SolarSystemInfoPlanet> = {
  mars: {
    name: "Mars, la planète rouge",
    identityCard: {
      diameter: 6800,
      sunDistance: "228 Millions",
      temperature: 63,
      revolution: 687,
      rotation: 24.67,
      satellites: 2,
      discovery: "Galilée en 1610",
    },
    descriptions: [
      {
        title: "La planète rouge",
        body: "Avec Mercure, Vénus et la terre, Mars est l'une des 4 planètes rocheuses du Système solaire.\n  Elle est appellé la planette rouge car sa surface rocailleuse et désertique a une couleur rougeâtre (due à la présence de fer)",
      },
      {
        title: "Composition de l'atmosphère",
        body: "95% de dioxide de carbonne, 3% de diazote, un peu d'oxygène, de vapeur d'eau et d'autres gaz.\n Ce mélange gazeux n'est pas respirable par l'homme.  ",
      },
      {
        title: "Olympus Mons",
        body: "C'est le plus grand volcan du Système solaire. Il mesure 600 km de diamètre et 25 km d'altitude.\n C'est près de 3 fois plus que l'Everest, le plus haut sommet de la Terre (8848m). Olympus Mons est un volcan éteint.",
      },
      {
        title: "Valles Marineris",
        body: "C'est un immense canyon de 120 km de large et de 6 km de profondeur.\n Il s'étend sur près de de 4000 km. \n Cest 5 fois plus gran que le plus grand canyon de la Terre, situé aux États-unis (long de 800 km environ)",
      },
    ],
  },
  neptune: {
    name: "Neptune, une planete bleue",
    identityCard: {
      diameter: 49600,
      sunDistance: "4.5 Milliard",
      temperature: -235,
      revolution: 165,
      rotation: 16,
      satellites: 13,
      discovery: "Johann Galle en 1846",
    },
    descriptions: [
      {
        title: "Origine du nom",
        body: "Le nom de la planète vient du dieu romain des Océans. Neptune. \nOn a donné ce nom à la planète à cause de sa couleur bleue. Cette teinte vient du méthane contenu dans son atmosphère.",
      },
      {
        title: "Des gaz et de la glace",
        body: "Neptune est une planète géante composée surtout de gaz et de glace. \n Il y fait très froid parce qu'elle est très éloignée du soleil. \n Son atmosphère est formée de nuages épais, agités de vents souvent violents et d'orages.",
      },
      {
        title: "4 Anneaux",
        body: "Les 4 anneaux de Neptune ont été découverts en 1989 par la sonde Voyager 2. \n Les scientifiques pensent qu'ils sont formés de roches et de glaces.",
      },
      {
        title: "Triton, un satellite",
        body: "Trition est le plus gros satellites de Neptunes. \n Plusieurs volcans se sont formés à sa surface, ils rejettent du liquide et des gaz. \n Une grande partie du pôle Sud est gelée. Triton est l'objet le plus froid du système solaire. Sa température moyenne est de -235°C!",
      },
    ],
  },
  earth: {
    name: "La Terre, notre planète",
    identityCard: {
      diameter: 12800,
      sunDistance: "150 Millions",
      temperature: 15,
      revolution: 365.26,
      rotation: 23.93,
      satellites: 1,
      discovery: "",
    },
    descriptions: [
      {
        title: "La planète bleue",
        body: "Vue de l'espace, la Terre ressemble à une grosse boule bleue. Cette couleur est due aux grandes étendues d'eau qui la recouvrent.\n Les océans et les mers représentent 71 % de la surface de la planète. \n La Terre est la seule planète connue où de l'eau liquide coule sur la surface.",
      },
      {
        title: "Une planète rocheuse",
        body: "La terre est la 3° planète du Système solaire, située entre Vénus et Mars.\n C'est la plus grande des planètes rocheuses (ou planètes telluriques).\n La température moyenne est de 15 °C. Mais le climat est très variable en fonction des endroits",
      },
      {
        title: "Un aimant géant",
        body: "La Terre possède un champ magnétique très fort. Il la protège des vents solaires, des courants de particules électriques très puissants produits par le Soleil",
      },
      {
        title: "Une planète et son satellite",
        body: "La Terre est accompagnée d'un satellite: la Lune.\n Celle-ci fait plus d'un quart de la taille de la Terre soit 3500 km.",
      },
    ],
  },
  sun: {
    name: "Le soleil, notre étoile",
    identityCard: {
      diameter: 1_400_000,
      sunDistance: "",
      temperature: 15_000_000,
      revolution: 0,
      rotation: 0,
      satellites: 0,
      discovery: "",
    },
    descriptions: [
      {
        title: "Une étoile",
        body: "Le soleil est une étoile comme il en existe des milliards dans l'univers. Mais c'est celle qui est la plus proche de la Terre. \n Sa lumière et sa chaleur permettent la vie sur notre planète.",
      },
      {
        title: "Très chaud'",
        body: "Le Soleil est une boule de gaz brûlants. Au coeur du soleil, sa partie la plus chaude, il fait plus de 15 milliards de degrés. \n Cette température est si élevée que les atomes sont détruits et de nouveaux sont créés en permanence.",
      },
      {
        title: "Des éruptions",
        body: "Le soleil envoie dans l'espace des jets de gaz brûlant. Ce sont des éruptions solaires. Elle durent de quelques minutes à quelques heures. \n Elles sont visibles de la Terre la nuit et sont d'une intensité maximale au mois de décembre.",
      },
      {
        title: "Des événements",
        body: "Tous les 11 ans environ, le soleil connait des éruptions beaucoup plus violentes que d'habitude. \n  Il envoie alors des poussières électriques en grande quantité dans l'espace. Cela peut brouiller les communications par satellite ou par radio.",
      },
    ],
  },
  moon: {
    name: "La Lune, le satellite de la Terre",
    identityCard: {
      diameter: 3500,
      sunDistance: "384 Milles", // De la terre
      temperature: 120,
      revolution: 27, // de la terre
      rotation: 27,
      satellites: 0,
      discovery: "",
    },
    descriptions: [
      {
        title: "Face visible de la Lune",
        body: "La lune tourne sur elle même en 27 jours et 8 heures. Elle met le même temps pour faire le tour de la Terre. \n Ces mouvements synchones expliquent que, de la Terre, on voit toujours la même face de la Lune.",
      },
      {
        title: "Un sol accidenté",
        body: "La surface de la Lune est couverte de cratères, de montagnes et de vastes plaines sombres appelées 'mers'. \n Ces cratères ont été formés par l'impact de météorites. Les mers lunaires sont en réalité d'anciennes coulées de lave solidifiée.",
      },
      {
        title: "Les phases de la Lune",
        body: "La Lune change d'apparence au cours du mois : c'est ce qu'on appelle les phases lunaires. \n Ces changements sont dus à la position de la Lune par rapport au Soleil et à la Terre. Quand la Lune est pleine, toute sa face visible est éclairée par le Soleil.",
      },
      {
        title: "Premier pas sur la Lune",
        body: "Le 20 juillet 1969, les astronautes américains Neil Armstrong et Buzz Aldrin sont les premiers hommes à marcher sur la Lune lors de la mission Apollo 11. \n Au total, 12 astronautes ont marché sur la Lune entre 1969 et 1972.",
      },
    ],
  },
  jupiter: {
    name: "Jupiter, la planète des géants",
    identityCard: {
      diameter: 143000,
      sunDistance: "779 Millions",
      temperature: -160,
      revolution: 12,
      rotation: 10,
      satellites: 60,
      discovery: "Depuis l'antiquité",
    },
    descriptions: [
      {
        title: "La plus grande des planètes",
        body: "Jupiter peut contenir plus de 1300 fois la planète Teree! Mais cette planète géante est composée de 90% d'hydrogène de d'environ 10% d'hélium. \n Près de la surface, l'hydrogène apparaît sous forme de gaz. \n Plus en profondeur, la pression augmente et l'hydrogène se trouve sous forme liquide. Plus profondement encore il devient solide. \n Jupiter, comme toute les planètes géantes ne possète pas de véritable surface solide.",
      },
      {
        title: "Une atmosphère mouvementée",
        body: "La partie de l'atmosphère visible de l'espace est très mouvementée. \n D'épais nuages forment des bandes de couleurs différentes qui circulation alternées. \n L'atmosphère est agitée de vents très violents: certains atteignent même 650 km/h!",
      },
      {
        title: "Des anneaux",
        body: "Jupiter est entourée d'anneaux fins et pâles. Ils ont été découverts en 1979 grâce à la sonde Voyager 1. Ils sont constitués de poussières.",
      },
      {
        title: "La 'Grande Tache Rouge'",
        body: "Il s'agit en fait d'une gigantesque tempête, assez grande pour contenir 3 planètes Tere! \n Depuis Gallilé, 1er astronome à l'avoir observée au XVIIe siècle, cette grande tache rouge n'a jamais disparu.",
      },
    ],
  },
  saturne: {
    name: "Saturne, la planète des anneaux",
    identityCard: {
      diameter: 121000,
      sunDistance: "1.4 Milliard",
      temperature: 11700,
      revolution: 30,
      rotation: 11,
      satellites: 60,
      discovery: "Depuis l'antiquités",
    },
    descriptions: [
      {
        title: "Une planète géante",
        body: "Comme Jupiter, Saturne est une planète géante gazeuse. Elle est composée d'hydrogène et d'hélium à l'état gazeuxet liquide. \n Son atmosphère est composée de nuages très épais. Elle ne possède pas de véritable surface solide. \n Saturne est la 2° plus grosse planète du Système solaire après Jupiter.",
      },
      {
        title: "Les anneaux de Saturne",
        body: "Saturne est entourée d'un système d'anneaux constitués de poussières et de blocs de glace et de roche. Il y a des milliers d'anneaux autour de Saturne de tailles, de couleurs de compositions différentes. \n Certains sont visibles de la terre grâce à un téléscope.",
      },
    ],
  },
  venus: {
    name: "Venus, la planète des amoureux",
    identityCard: {
      diameter: 12800,
      sunDistance: "108 Millions",
      temperature: 470,
      revolution: 225,
      rotation: 243,
      satellites: 0,
      discovery: "",
    },
    descriptions: [
      {
        title: "La planète la plus chaude du Système solaire",
        body: "Venus est la planète la plus chaude du Système solaire. \n Sa température moyenne est de 470°C. \n Cette température est due à l'effet de serre de l'atmosphère. \n La pression atmosphérique est 90 fois plus élevée que sur Terre.",
      },
      {
        title: "Une atmosphère épaisse",
        body: "Venus est entourée d'une atmosphère épaisse composée de dioxyde de carbone, de vapeur d'eau et de sulfure d'hydrogène. \n Cette atmosphère est responsable de l'effet de serre de la planète.",
      },
      {
        title: "Un volcan actif",
        body: "Venus possède des volcans. \n Le volcan le plus grand est Tharsis. \n Il mesure 1200 km de long et 270 km de large. \n De nombreux volcans se sont formés il y a 400 millions d'années.",
      },
      {
        title: "Un satellite relativement petit",
        body: "Venus est accompagnée d'un satellite: Phobos. \n Cette lune est relativement petite: 27 km de diamètre.",
      },
    ],
  },
  uranus: {
    name: "Uranus, la planète des gaz",
    identityCard: {
      diameter: 51100,
      sunDistance: "2.9 Milliard",
      temperature: -220,
      revolution: 84,
      rotation: 17,
      satellites: 27,
      discovery: "William Herschel en 1781",
    },
    descriptions: [
      {
        title: "Une planète bleue",
        body: "Vue de l'espace, Uranus présente une teinte bleu-vert. Un gaz de son atmosphère est responsable de cette couleur. \n La planète est entourée d'une brune épaisse qui empêche de voir les nuages depuis l'espace. \n Elle fait partie des planètes géante et elle est composée de gaz",
      },
      {
        title: "Une planète penchée",
        body: "Contrairement aux autres planètes du Système solaire, Uranus semble totalement penchée sur le côté. \n Elle tourne sur elle-même couché sur son orbite. \n Cette inclinaison est due à une collision avec une autre planète du Système solaire il y a 4.5 milliards d'années.",
      },
      {
        title: "Des anneaux",
        body: "Uranus est entouré d'au moins 13 anneaux. \n Ils ont été découverts en 1986 par la sonde Voyager 2. \n Ils sont constitués de blocs de glace et de roche.",
      },
      {
        title: "De nombreux satellites",
        body: "Uranus est accompagné de 27 lunes. \n Les deux plus gros sont: Titania et Oberon. \n Ils ont été découverts par l'astronome William Herschel en 1787.",
      },
    ],
  },
  mercury: {
    name: "Mercure",
    identityCard: {
      diameter: 4900,
      sunDistance: "58 Millions",
      temperature: 110,
      revolution: 88,
      rotation: 59,
      satellites: 0,
      discovery: "Depuis l'antiquité",
    },
    descriptions: [
      {
        title: "Origine du nom",
        body: "Chez les romains, Mercure est le messager des dieux, dieu du Commerce et des Voyages. \n La plnète doit sans doute son nom au fait qu'elle se déplace très rapidement comme le dieu romain.",
      },
      {
        title: "Des cratères",
        body: "La surface de Mercure est couverte de cratères, comme celle de la lune. \n Ces trous ont été creusés par la chute d'astéroïdes. \n Le plus grand de ces cratères est appelé 'bassin Caloris'. Il mesure 1300km de diamètre (plus grand que la France). \n Sur Mercure, d'autres endroits sont lisses, il s'agit sans doute de traces de coulées de lave.",
      },
      {
        title: "Pas d'atmosphère",
        body: "Il n'y a pas vraiment d'atmosphère sur Mercure. \n Seule une fine pellicule de gaz, essentiellement de l'eau, est présente dans l'espace environnant.",
      },
    ],
  },
};
