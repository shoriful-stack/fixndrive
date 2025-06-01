import { services } from "@/lib/service";
import React from "react";
import ServiceCard from "../Cards/ServiceCard";

const Service = () => {
  return (
    <div className="mt-32 mb-14 md:mx-[76px]">
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-5xl font-semibold">Our Service Area</h1>
        <p className="text-[14px] my-3.5">
          The majority have suffered alteration in some form, By injected
          humour, Or Randomised Words which don't look even slightly believable.{" "}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {
            services.map((service) => (
                <ServiceCard service={service} key={service._id}/>
            ))
        }
      </div>
    </div>
  );
};

export default Service;
