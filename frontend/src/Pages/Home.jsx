import React from "react";
import Hero from "../Components/Hero"; // correct Hero path
import FeaturedDestination from "../Components/FeaturedDestination";
import Exclusiveoffers from "../Components/Exclusiveoffers";
import Testimonial from "../Components/Testimonial";
import Newsletter from "../Components/Newsletter";
import Footer from "../Components/Footer";
const Home = () => {
  return (
    <div>
      <Hero />
      <FeaturedDestination/>
      <Exclusiveoffers/>
      <Testimonial/>
      <Newsletter/>
      <Footer/>
    </div>
  );
};

export default Home;
