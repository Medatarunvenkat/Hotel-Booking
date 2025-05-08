import React from "react";
import Hero from "../Components/Hero"; // correct Hero path
import FeaturedDestination from "../Components/FeaturedDestination";
import Exclusiveoffers from "../Components/Exclusiveoffers";
const Home = () => {
  return (
    <div>
      <Hero />
      <FeaturedDestination/>
      <Exclusiveoffers/>
    </div>
  );
};

export default Home;
