import Home from "./pages/Home";

import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";

import Matches from "./pages/Matches";
import Standings from "./pages/Standings";
import Squad from "./pages/Squad";
import FourOFour from "./components/FourOFour";
import { ScrollRestoration } from "react-router-dom";
import Footer from "../src/components/Footer";
import PlayerProfile from "./pages/PlayerProfile";
const Layout = () => (
  <>
    <ScrollRestoration />
    <NavBar />
    <div className="min-h-screen">
      <Outlet />
    </div>
    <Footer />
  </>
);

const routes = [
  {
    path: "/",
    element: <Layout />,
    errorElement: <FourOFour />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/squad", element: <Squad /> },
      { path: "/squad/:player_name", element: <PlayerProfile /> },
      { path: "/the-club", element: <div>CLUB</div> },
      { path: "/trophies", element: <div>TROPHIES</div> },
      { path: "/matches", element: <Matches /> },
      { path: "/sponsors", element: <div>SPONSORS</div> },
      { path: "/rm-city", element: <div>RM-CITY</div> },
      { path: "/standings", element: <Standings /> },
    ],
  },
];

export const navLinks = [
  { nav: "Home", path: "/" },
  { nav: "Los Blancos", path: "/the-club" },
  { nav: "Sponsors", path: "/sponsors" },
  { nav: "RM City", path: "/rm-city" },
];

export const shortLinks = [
  { nav: "Squad", path: "/squad" },
  { nav: "Trophies", path: "/trophies" },

  { nav: "Matches", path: "/matches" },
];

export default routes;
