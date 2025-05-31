"use client";

import React from "react";
import Carousel from "./Carousel";
import About from "./About";

const Homepage = () => {
  return (
    <div className="px-1 mt-2">
      <Carousel />
      <About />
    </div>
  );
};

export default Homepage;
