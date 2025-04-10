import best_club from "../assets/icons/trophies/fifa_20th.svg";
import ucl from "../assets/icons/trophies/ucl.svg";
import club_world from "../assets/icons/trophies/club_world.svg";
import e_super_cup from "../assets/icons/trophies/superCup.svg";
import uefa from "../assets/icons/trophies/uefa_cup.svg";
import laliga from "../assets/icons/trophies/laliga.svg";
import spanish from "../assets/icons/trophies/spanish.svg";
import s_super_cup from "../assets/icons/trophies/spanish_super.svg";
import { trophyImages } from "../data/trophyImages";
const trophies = [
  {
    name: "The Best Club of the 20th Century FIFA Trophy",
    icon: best_club,
    total: 1,
    description:
      "This prestigious award was given by FIFA to recognize the most successful football club of the 20th century. It highlights decades of dominance and global impact.",
    image: trophyImages["best_club"],
  },
  {
    name: "UEFA Champions League",
    icon: ucl,
    total: 15,
    description:
      "The most prestigious club competition in European football. Winning it cements a club’s place among the elite of the sport.",
    image: "",
  },
  {
    name: "FIFA Club World Cups",
    icon: club_world,
    total: 9,
    description:
      "This tournament brings together the champion clubs from each continent. Winning it proves global supremacy in club football.",
    image: "",
  },
  {
    name: "European Super Cups",
    icon: e_super_cup,
    total: 6,
    description:
      "Held annually between the UEFA Champions League and Europa League winners. It serves as the curtain-raiser for the European football season.",
    image: "",
  },

  {
    name: "UEFA Cups",
    icon: uefa,
    total: 2,
    description:
      "Known today as the UEFA Europa League, this competition was once the top secondary European tournament. It showcases strong continental performance.",
    image: "",
  },
  {
    name: "La Liga",
    icon: laliga,
    total: 36,
    description:
      "Spain’s top professional league and one of the most competitive in the world. Winning La Liga is a testament to season-long dominance.",
    image: "",
  },
  {
    name: "Spanish Cups",
    icon: spanish,
    total: 20,
    description:
      "Officially called the Copa del Rey, it's a knockout competition filled with drama and tradition. It’s one of Spain’s oldest and most respected trophies.",
    image: "",
  },
  {
    name: "Spanish Super Cups",
    icon: s_super_cup,
    total: 13,
    description:
      "Contested between the winners of La Liga and Copa del Rey. It kicks off the Spanish football season with a high-stakes clash.",
    image: "",
  },
];

export default trophies;
