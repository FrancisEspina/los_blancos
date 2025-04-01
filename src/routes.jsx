import Home from "./pages/Home";

import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import { div, path } from "motion/react-client";
import { ScrollRestoration } from "react-router-dom";

const Layout = () => (
  <>
    <ScrollRestoration />
    <NavBar />
    <Outlet />
  </>
);

const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/squad", element: <div>SQUAD</div> },
      { path: "/the-club", element: <div>CLUB</div> },
      { path: "/trophies", element: <div>TROPHIES</div> },
      { path: "/matches", element: <div>MATCHES</div> },
      { path: "/sponsors", element: <div>SPONSORS</div> },
      { path: "/rm-city", element: <div>RM-CITY</div> },
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
