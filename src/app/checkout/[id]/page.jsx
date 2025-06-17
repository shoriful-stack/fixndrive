import Image from "next/image";
import Link from "next/link";
import React from "react";

const Page = () => {
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
            Check Out
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
      <div>
        <form onSubmit={handleBooking}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                defaultValue={data?.user?.name}
                type="text"
                name="name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Date</span>
              </label>
              <input
                defaultValue={new Date().getDate()}
                type="date"
                name="date"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                defaultValue={data?.user?.email}
                type="text"
                name="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Due amount</span>
              </label>
              <input
                defaultValue={price}
                readOnly
                type="text"
                name="price"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Phone</span>
              </label>
              <input
                required
                type="text"
                name="phone"
                placeholder="Your Phone"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Present Address</span>
              </label>
              <input
                type="text"
                name="address"
                placeholder="Your Address"
                className="input input-bordered"
              />
            </div>
          </div>
          <div className="form-control mt-6">
            <input
              className="btn btn-primary btn-block"
              type="submit"
              value="Order Confirm"
            />
          </div>
        </form>
      </div>
    </div>
  );
};
export default Page;
