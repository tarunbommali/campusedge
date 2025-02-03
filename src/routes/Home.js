import React from "react";
import HeroPage1 from "../components/home/HeroPage1";
import HeroPage2 from "../components/home/HeroPage2";

const Home = () => {
  return (
    <div className="relative overflow-x-hidden">
      <HeroPage1 />
      <HeroPage2 />
    </div>
  );
};

export default Home;
