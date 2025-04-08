import React from "react";
import Hero from "../components/HomeComponents/Hero";
import Banner from "../components/HomeComponents/Banner";
import TrophyBanner from "../components/HomeComponents/TrophyBanner";
import HomeSquad from "../components/HomeComponents/HomeSquad";
import HomeUpcomingMatches from "../components/HomeComponents/HomeUpcomingMatches";
import HomeSponsors from "../components/HomeComponents/HomeSponsors";
import VideoBanner from "../components/HomeComponents/VideoBanner";
const Home = () => {
  return (
    <>
      <Hero />
      <TrophyBanner />
      <Banner />
      <HomeSquad />
      <HomeUpcomingMatches />
      <HomeSponsors />
      <VideoBanner />
    </>
  );
};

export default Home;
