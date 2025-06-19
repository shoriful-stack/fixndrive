"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { use } from "react";
import Swal from "sweetalert2";

const EditBooking = ({ params }) => {
  const { data } = useSession();
  const { id } = use(params);
  const [booking, setBooking] = useState({});
  const loadBooking = async () => {
    const bookingDetails = await fetch(
      `http://localhost:3000/my-bookings/api/booking/${id}`
    );
    const data = await bookingDetails.json();
    setBooking(data.response);
  };

  const { serviceTitle, servicePrice, date, message, phone, address } =
    booking || {};

  useEffect(() => {
    loadBooking();
  }, [params]);

  const handleUpdateBooking = async (event) => {
    event.preventDefault();
    const updated = {
      date: event.target.date.value,
      phone: event.target.phone.value,
      address: event.target.address.value,
      message: event.target.message.value
    };
    const response = await fetch(
      `http://localhost:3000/my-bookings/api/booking/${id}`,
      {
        method: "PATCH",
        body: JSON.stringify(updated),
        headers: {
          "content-type": "application/json",
        },
      }
    );
    if (response.status === 200) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Booking Details Updated Successfully!",
        showConfirmButton: false,
        timer: 1300,
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
            Edit {serviceTitle}
          </h1>
        </div>
        <div className="absolute bottom-0 left-6 md:left-12 lg:right-[480px] lg:left-[410px]">
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
                <Link href={"/my-bookings"}>
                  <span className="mx-1">/</span>
                  <span>My Bookings</span>
                </Link>
                <span className="mx-1">/</span>
                <span>Edit Booking</span>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="my-20">
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
          <div className="w-full max-w-4xl relative">
            {/* Form content */}
            <form
              className="relative z-10 space-y-6"
              onSubmit={handleUpdateBooking}
            >
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
                    defaultValue={phone}
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent placeholder-gray-400"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Due Amount"
                    name="servicePrice"
                    defaultValue={servicePrice}
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
                    defaultValue={address}
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent placeholder-gray-400"
                  />
                </div>
                <div>
                  <input
                    type="date"
                    defaultValue={date}
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
                  defaultValue={message}
                  rows={8}
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent placeholder-gray-400 resize-none"
                />
              </div>

              {/* Submit button */}
              <button
                type="submit"
                className="w-full bg-[#FF3811] hover:bg-red-600 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 cursor-pointer"
              >
                Edit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditBooking;
