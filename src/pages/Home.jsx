import React from "react";
import Hero from "../components/HomeComponents/Hero";
import Banner from "../components/HomeComponents/Banner";
import TrophyBanner from "../components/HomeComponents/TrophyBanner";
import HomeSquad from "../components/HomeComponents/HomeSquad";
import HomeUpcomingMatches from "../components/HomeComponents/HomeUpcomingMatches";
const Home = () => {
  return (
    <>
      <Hero />
      <TrophyBanner />
      <Banner />
      <HomeSquad />
      <HomeUpcomingMatches />
    </>
  );
};

export default Home;
