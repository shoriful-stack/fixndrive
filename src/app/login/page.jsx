"use client"
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {signIn} from "next-auth/react";
import { useSearchParams } from "next/navigation";
import SocialLogin from "@/components/shared/SocialLogin";

const Page = () => {
  const searchParams = useSearchParams();
  const path = searchParams.get('redirect');

  const handleLogin = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const response = await signIn("credentials", {
      email: email,
      password: password,
      redirect: true,
      callbackUrl: path ? path : "/"
    })
  }
  return (
    <div className="min-h-screen flex mb-12 mt-6 mx-auto w-9/10">
      {/* Left side */}
      <div className="hidden lg:flex lg:w-1/2 bg-white items-center justify-center gap-10">
        <Image
          alt="Login Picture"
          src={"/assets/images/login/login.svg"}
          width={400}
          height={400}
        />
      </div>

      {/* Right side */}
      <div className="w-full lg:w-[45%] flex items-center justify-center py-12 border border-gray-300 rounded-lg">
        <div className="w-full max-w-sm space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Login</h2>
          </div>

          <form className="space-y-6" onSubmit={handleLogin}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Your email"
                className="w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
              Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Your password"
                className="w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-4 rounded-md transition duration-200 cursor-pointer"
            >
              Login
            </button>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-gray-50 text-gray-500">
                  Or Sign Up with
                </span>
              </div>
            </div>
            <SocialLogin />
          </div>

          <div className="text-center">
            <p className="text-sm text-gray-600">
              Don't you have an account?{" "}
              <Link
                href="/signup"
                className="font-medium text-orange-500 hover:text-orange-600"
              >
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
