import { getServiceDetails } from "@/service/getServices";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Service Details",
  description: "Service Details Page",
};

const Page = async ({ params }) => {
  const details = await getServiceDetails(params.id);
  const { title, img, description, facility, _id, price } = details.service;
  return (
    <div className="w-11/12 mx-auto mb-12">
      <div className="relative h-60">
        <Image
          className="absolute h-60 w-full left-0 top-0 object-cover rounded-lg"
          src="https://i.ibb.co/hJLW0qL7/4.jpg"
          alt="service"
          width={1920}
          height={1080}
          style={{ width: "100vw" }}
        />
        <div className="absolute h-60 w-full left-0 top-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent rounded-lg"></div>
        <div className="flex items-center justify-center">
          <h1 className="text-white text-[32px] absolute h-full left-20 top-0 font-bold flex justify-center items-center">
            Details of {title}
          </h1>
        </div>
        <div className="absolute bottom-0 left-6 md:left-12 lg:right-[500px] lg:left-[450px]">
          <div className="relative">
            {/* Angular breadcrumb shape using clip-path */}
            <div
              className="bg-orange-500 hover:bg-orange-600 transition-colors duration-200 px-6 py-3 pr-8"
              style={{
                clipPath:
                  "polygon(0 0, calc(100% - 12px) 0, 100% 50%, calc(100% - 12px) 100%, 0 100%)",
              }}
            >
              <nav className="text-white text-sm font-medium whitespace-nowrap">
                <Link href={"/"}>
                  <span className="hover:text-orange-200 cursor-pointer">
                    Home
                  </span>
                </Link>
                <span className="mx-1">/</span>
                <span>Service Details</span>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <div className="p-10 my-10 bg-gray-100">
        <h2 className="text-3xl font-bold text-orange-600">{title}</h2>
        <p>{description}</p>
      </div>

      <div className="my-6">
        <div className="grid grid-cols-3 gap-8">
          <div className="col-span-2 grid grid-cols-2 gap-6">
            {facility.map((item, index) => (
              <div
                className="bg-rose-100 p-4 border-t-4 border-t-rose-500 rounded-xl"
                key={index}
              >
                <h2 className="text-xl font-bold">{item?.name}</h2>
                <p>{item?.details}</p>
              </div>
            ))}
          </div>

          <div className="p-6 bg-gray-100">
            <Image
              className="w-full object-cover h-40"
              src={"/assets/images/checkout/checkout.png"}
              alt="checkout service"
              width={400}
              height={400}
            />
            <div className="flex my-4">
              <h2 className="text-xl font-bold ">Price: </h2>
              <p className="text-2xl text-rose-500"> ${price}</p>
            </div>
            <Link href={`/checkout/${_id}`}>
              <button className="bg-rose-500 px-3 py-2 rounded-lg mt-2 w-full cursor-pointer">
                Proceed Checkout
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Page;
