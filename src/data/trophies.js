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
      "Awarded by FIFA to recognize the most successful football club of the 20th century, highlighting decades of dominance and global impact.",
    image: trophyImages["best_club"],
    years: ["2000"],
  },
  {
    name: "UEFA Champions League",
    icon: ucl,
    total: 15,
    description:
      "The most prestigious club competition in European football. Winning it cements a club’s place among the elite of the sport.",
    image: trophyImages["ucl"],
    years: [
      "1955–56",
      "1956–57",
      "1957–58",
      "1958–59",
      "1959–60",
      "1965–66",
      "1997–98",
      "1999–2000",
      "2001–02",
      "2013–14",
      "2015–16",
      "2016–17",
      "2017–18",
      "2021–22",
      "2023–24",
    ],
  },
  {
    name: "FIFA Club World Cups",
    icon: club_world,
    total: 5,
    description:
      "This tournament brings together the champion clubs from each continent. Winning it proves global supremacy in club football.",
    image: trophyImages["club_world_cup"],
    years: ["2014", "2016", "2017", "2018", "2022"],
  },
  {
    name: "European Super Cups",
    icon: e_super_cup,
    total: 6,
    description:
      "Held annually between the UEFA Champions League and Europa League winners. It serves as the curtain-raiser for the European football season.",
    image: trophyImages["e_supercup"],
    years: ["2002", "2014", "2016", "2017", "2022", "2024"],
  },
  {
    name: "UEFA Cups",
    icon: uefa,
    total: 2,
    description:
      "Known today as the UEFA Europa League, this competition was once the top secondary European tournament. It showcases strong continental performance.",
    image: trophyImages["uefa_cups"],
    years: ["1984–85", "1985–86"],
  },
  {
    name: "La Liga",
    icon: laliga,
    total: 36,
    description:
      "Spain’s top professional league and one of the most competitive in the world. Winning La Liga is a testament to season-long dominance.",
    image: trophyImages["laliga"],
    years: [
      "1931–32",
      "1932–33",
      "1953–54",
      "1954–55",
      "1956–57",
      "1957–58",
      "1960–61",
      "1961–62",
      "1962–63",
      "1963–64",
      "1964–65",
      "1966–67",
      "1967–68",
      "1968–69",
      "1971–72",
      "1974–75",
      "1975–76",
      "1977–78",
      "1978–79",
      "1979–80",
      "1985–86",
      "1986–87",
      "1987–88",
      "1988–89",
      "1989–90",
      "1994–95",
      "1996–97",
      "2000–01",
      "2002–03",
      "2006–07",
      "2007–08",
      "2011–12",
      "2016–17",
      "2019–20",
      "2021–22",
      "2023–24",
    ],
  },
  {
    name: "Spanish Cups",
    icon: spanish,
    total: 20,
    description:
      "Officially called the Copa del Rey, it's a knockout competition filled with drama and tradition. It’s one of Spain’s oldest and most respected trophies.",
    image: trophyImages["spanish_cup"],
    years: [
      "1904–05",
      "1905–06",
      "1906–07",
      "1907–08",
      "1916–17",
      "1933–34",
      "1935–36",
      "1945–46",
      "1946–47",
      "1961–62",
      "1969–70",
      "1973–74",
      "1974–75",
      "1979–80",
      "1981–82",
      "1988–89",
      "1992–93",
      "2010–11",
      "2013–14",
      "2022–23",
    ],
  },
  {
    name: "Spanish Super Cups",
    icon: s_super_cup,
    total: 13,
    description:
      "Contested between the winners of La Liga and Copa del Rey. It kicks off the Spanish football season with a high-stakes clash.",
    image: trophyImages["s_supercup"],
    years: [
      "1988",
      "1989",
      "1990",
      "1993",
      "1997",
      "2001",
      "2003",
      "2008",
      "2012",
      "2017",
      "2020",
      "2022",
      "2024",
    ],
  },
];

export default trophies;
