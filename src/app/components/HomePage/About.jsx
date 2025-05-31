import React from "react";

const About = () => {
  return (
    <div className="flex justify-between my-24">
      <div className="flex flex-col lg:flex-row items-center lg:items-start w-full gap-8">
        <div className="lg:w-1/2 relative flex justify-center">
          <img
            src="https://i.ibb.co/L5r8yXJ/Rectangle-4.png"
            className="w-3/4 rounded-lg shadow-2xl"
            alt="Main"
          />
          <img
            src="https://i.ibb.co/k8c6Nh4/Rectangle-5.png"
            className="w-1/2 absolute right-5 top-4/5 transform -translate-y-1/2 rounded-lg border-8 border-white shadow-2xl"
            alt="Overlay"
          />
        </div>
        <div className="lg:w-2/5 space-y-5 px-2">
          <h3 className="text-2xl text-orange-500 font-bold">About Us</h3>
          <h1 className="text-5xl font-bold">
            We are qualified <br /> & of experience in this field
          </h1>
          <p className="py-4 text-gray-600 text-[15px]">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which do not look even slightly
            believable.
          </p>
          <p className="text-gray-600 text-[15px]">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which do not look even slightly
            believable.
          </p>
          <button className="px-4 py-2 hover:outline-red-500 hover:bg-orange-400 transition duration-500 hover:text-white bg-[#FF3811] text-white rounded-sm text-[14px] cursor-pointer">
            Get More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
