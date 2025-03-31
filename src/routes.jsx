import Home from "./pages/Home";

import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import { path } from "motion/react-client";
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
    children: [{ path: "/", element: <Home /> }],
  },
];

export const navLinks = [
  { nav: "Los Blancos", link: "/squad" },
  { nav: "Trophies", link: "/trophies" },
  { nav: "Sponsors", link: "/sponsors" },
  { nav: "RM City", link: "/rm-city" },
];

export const shortLinks = [
  { nav: "Home", link: "/" },
  { nav: "Squad", link: "/squad" },
  { nav: "Matches", link: "/matches" },
];

export default routes;
