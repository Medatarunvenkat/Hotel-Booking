import React from "react";
import Hero from "../Components/Hero"; // correct Hero path
import FeaturedDestination from "../Components/FeaturedDestination";
import Exclusiveoffers from "../Components/Exclusiveoffers";
import Testimonial from "../Components/Testimonial";
const Home = () => {
  return (
    <div>
      <Hero />
      <FeaturedDestination/>
      <Exclusiveoffers/>
      <Testimonial/>
    </div>
  );
};

export default Home;
