import React from "react";
import Hero from "../components/HomeComponents/Hero";
import Banner from "../components/HomeComponents/Banner";
import TrophyBanner from "../components/HomeComponents/TrophyBanner";
import HomeSquad from "../components/HomeComponents/HomeSquad";
import HomeUpcomingMatches from "../components/HomeComponents/HomeUpcomingMatches";
import HomeSponsors from "../components/HomeComponents/HomeSponsors";
const Home = () => {
  return (
    <>
      <Hero />
      <TrophyBanner />
      <Banner />
      <HomeSquad />
      <HomeUpcomingMatches />
      <HomeSponsors />
    </>
  );
};

export default Home;
