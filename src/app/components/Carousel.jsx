"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

import { Autoplay, EffectFade, Navigation } from "swiper/modules";

export default function Carousel() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        modules={[EffectFade, Navigation, Autoplay]}
        className="mySwiper"
        autoplay={{
          delay: 8000,
          disableOnInteraction: false,
        }}
        speed={1500}
      >
        <SwiperSlide>
          <div className="relative bg-[linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.0)),url('https://i.ibb.co/nNtY4R5p/5.jpg')] bg-no-repeat bg-cover bg-center md:h-[550px] h-[500px] rounded-lg">
            {/* Main content container */}
            <div className="absolute top-[28%] w-[450px] left-[7%]">
              <h1 className="text-5xl font-bold text-white">
                Complete Car Care, Just a Click Away
              </h1>
              <p className="text-gray-200 text-[12px] my-3.5">
                From oil changes to engine repairs — get professional service
                with doorstep convenience.
              </p>
              <div className="flex gap-3">
                <button className="p-2 hover:outline-red-500 hover:bg-orange-400 transition duration-500 hover:text-white bg-[#FF3811] text-white rounded-sm text-[14px] cursor-pointer">
                  Discover More
                </button>
                <button className="p-2 border border-white hover:outline-red-500 hover:bg-[#FF3811] transition duration-500 text-white rounded-sm text-[14px] cursor-pointer">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[linear-gradient(rgba(0,0,0,0.0),rgba(0,0,0,0.6)),url(https://i.ibb.co/JRVCkgMp/1.jpg)] bg-no-repeat bg-cover bg-center md:h-[550px] h-[500px] rounded-lg">
            <div className="absolute top-[30%] w-[420px] right-[13%]">
              <h1 className="text-5xl font-bold text-white w-24">
                Fix. Maintain. Drive.
              </h1>
              <p className="text-gray-200 text-[12px] my-3.5">
                Book your car service online and experience hassle-free repairs from the comfort of your home.
              </p>
              <div className="flex gap-3">
                <button className="p-2 hover:outline-red-500 hover:bg-orange-400 transition duration-500 hover:text-white bg-[#FF3811] text-white rounded-sm text-[14px] cursor-pointer">
                  Discover More
                </button>
                <button className="p-2 border border-white hover:outline-red-500 hover:bg-[#FF3811] transition duration-500 text-white rounded-sm text-[14px] cursor-pointer">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.0)),url(https://i.ibb.co/s9fMsQB3/2.jpg)] bg-no-repeat bg-cover bg-center md:h-[550px] h-[500px] rounded-lg">
            <div className="absolute top-[28%] w-80 left-[7%]">
              <h1 className="text-5xl font-bold text-white">
                Because Your Car Deserves the Best
              </h1>
              <p className="text-gray-200 text-[12px] my-3.5">
                Certified technicians. Transparent pricing. Fast and efficient
                repair solutions.
              </p>
              <div className="flex gap-3">
                <button className="p-2 hover:outline-red-500 hover:bg-orange-400 transition duration-500 hover:text-white bg-[#FF3811] text-white rounded-sm text-[14px] cursor-pointer">
                  Discover More
                </button>
                <button className="p-2 border border-white hover:outline-red-500 hover:bg-[#FF3811] transition duration-500 text-white rounded-sm text-[14px] cursor-pointer">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[url(https://i.ibb.co/FLBdL8p0/3.jpg)] bg-no-repeat bg-cover bg-center md:h-[550px] h-[500px] rounded-lg">
            <div className="absolute top-[28%] w-80 right-[9%]">
              <h1 className="text-5xl font-bold text-white">
                Affordable Price For Car Servicing
              </h1>
              <p className="text-gray-200 text-[12px] my-3.5">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="flex gap-3">
                <button className="p-2 hover:outline-red-500 hover:bg-orange-400 transition duration-500 hover:text-white bg-[#FF3811] text-white rounded-sm text-[14px] cursor-pointer">
                  Discover More
                </button>
                <button className="p-2 border border-white hover:outline-red-500 hover:bg-[#FF3811] transition duration-500 text-white rounded-sm text-[14px] cursor-pointer">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.0)),url(https://i.ibb.co/hJLW0qL7/4.jpg)] bg-no-repeat bg-cover bg-center md:h-[550px] h-[500px] rounded-lg">
            <div className="absolute top-[12%] w-80 left-[37%]">
              <h1 className="text-5xl font-bold text-white">
                Your Car, Our Care.
              </h1>
              <p className="text-gray-200 text-[12px] my-3.5">
                24/7 support, expert mechanics, and genuine parts. We keep you moving.
              </p>
              <div className="flex gap-3">
                <button className="p-2 hover:outline-red-500 hover:bg-orange-400 transition duration-500 hover:text-white bg-[#FF3811] text-white rounded-sm text-[14px] cursor-pointer">
                  Discover More
                </button>
                <button className="p-2 border border-white hover:outline-red-500 hover:bg-[#FF3811] transition duration-500 text-white rounded-sm text-[14px] cursor-pointer">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.0)),url(https://i.ibb.co/PvDSqjvf/6.jpg)] bg-no-repeat bg-cover bg-center md:h-[550px] h-[500px] rounded-lg">
            <div className="absolute top-[28%] w-80 left-[7%]">
              <h1 className="text-5xl font-bold text-white">
                Your Car’s Second Home.
              </h1>
              <p className="text-gray-200 text-[12px] my-3.5">
                We treat every vehicle like our own — with care, skill, and passion.
              </p>
              <div className="flex gap-3">
                <button className="p-2 hover:outline-red-500 hover:bg-orange-400 transition duration-500 hover:text-white bg-[#FF3811] text-white rounded-sm text-[14px] cursor-pointer">
                  Discover More
                </button>
                <button className="p-2 border border-white hover:outline-red-500 hover:bg-[#FF3811] transition duration-500 text-white rounded-sm text-[14px] cursor-pointer">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
