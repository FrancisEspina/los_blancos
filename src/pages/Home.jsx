import React from "react";
import Hero from "../components/HomeComponents/Hero";
import Banner from "../components/HomeComponents/Banner";
import TrophyBanner from "../components/HomeComponents/TrophyBanner";
import HomeSquad from "../components/HomeComponents/HomeSquad";
const Home = () => {
  return (
    <>
      <Hero />
      <TrophyBanner />
      <Banner />
      <HomeSquad />
    </>
  );
};

export default Home;
