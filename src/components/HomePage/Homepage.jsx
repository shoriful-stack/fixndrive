"use client";

import React from "react";
import About from "./About";
import Service from "./Service";
import Carousel from "./Carousel";

const Homepage = () => {
  return (
    <div className="px-1 mt-2">
      <Carousel />
      <About />
      <Service />
    </div>
  );
};

export default Homepage;
