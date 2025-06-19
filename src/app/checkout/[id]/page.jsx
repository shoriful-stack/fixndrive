"use client";
import { getServiceDetails } from "@/service/getServices";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { use } from "react";
import Swal from "sweetalert2";

const Checkout = ({ params }) => {
  const { data } = useSession();
  const { id } = use(params);
  const [service, setService] = useState({});
  const loadService = async () => {
    const details = await getServiceDetails(id);
    setService(details.service);
  };

  const { _id, title, price } = service || {};

  useEffect(() => {
    loadService();
  }, [params]);

  const handleBooking = async (event) => {
    event.preventDefault();
    const newBooking = {
      name: data?.user?.name,
      email: data?.user?.email,
      phone: event.target.phone.value,
      address: event.target.address.value,
      message: event.target.message.value,
      date: event.target.date.value,
      serviceId: _id,
      serviceTitle: title,
      servicePrice: price,
    };

    const response = await fetch(
      "http://localhost:3000/checkout/api/newBooking",
      {
        method: "POST",
        body: JSON.stringify(newBooking),
        headers: {
          content_type: "application/json",
        },
      }
    );
    if (response.status === 200) {
      Swal.fire({
        position: "top",
        icon: "success",
        title: "Booked Successfully",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!"
      });
    }
  };
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
            Check Out {title}
          </h1>
        </div>
        <div className="absolute bottom-0 left-6 md:left-12 lg:right-[530px] lg:left-[450px]">
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
                <span>Checkout</span>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="my-20">
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
          <div className="w-full max-w-4xl relative">
            {/* Form content */}
            <form className="relative z-10 space-y-6" onSubmit={handleBooking}>
              {/* First row - Name fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    name="name"
                    defaultValue={data?.user?.name}
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent placeholder-gray-400"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    name="email"
                    defaultValue={data?.user?.email}
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent placeholder-gray-400"
                  />
                </div>
              </div>

              {/* Second row - Contact fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="tel"
                    placeholder="Your Phone"
                    name="phone"
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent placeholder-gray-400"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Due Amount"
                    name="price"
                    defaultValue={price}
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent placeholder-gray-400"
                  />
                </div>
              </div>
              {/* Third row - Contact fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    placeholder="Present Address"
                    name="address"
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent placeholder-gray-400"
                  />
                </div>
                <div>
                  <input
                    type="date"
                    defaultValue={new Date().toISOString().split("T")[0]}
                    name="date"
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent placeholder-gray-400"
                  />
                </div>
              </div>

              {/* Message field */}
              <div className="relative">
                <textarea
                  placeholder="Your Message"
                  name="message"
                  rows={8}
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent placeholder-gray-400 resize-none"
                />
              </div>

              {/* Submit button */}
              <button
                type="submit"
                className="w-full bg-[#FF3811] hover:bg-red-600 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 cursor-pointer"
              >
                Order Confirm
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Checkout;
