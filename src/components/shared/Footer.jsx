import React from "react";

const Footer = () => {
  return (
    <footer className="bg-zinc-950 dark:bg-gray-900">
      <div className="w-11/12 pt-20 pb-8 mx-auto">
        <div className="lg:flex">
          <div className="w-full -mx-6 lg:w-2/5">
            <div className="px-6">
              <a href="#">
                <img
                  className="w-auto h-7"
                  src="https://merakiui.com/images/full-logo.svg"
                  alt="Logo"
                />
              </a>

              <p className="max-w-sm mt-2 text-white dark:text-gray-400">
                Join 31,000+ others and never miss out on new tips, tutorials,
                and more.
              </p>

              <div className="flex mt-6 -mx-2">
                <a
                  href="#"
                  className="mx-2 text-white transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                  aria-label="Reddit"
                >
                  <svg
                    className="w-5 h-5 fill-current"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 22C6.477 22 2 17.523 2 12C2 6.478 6.477 2 12 2C17.522 2 22 6.478 22 12C22 17.523 17.522 22 12 22ZM13 9.999H11V14H13V9.999ZM12 16C11.4477 16 11 15.5523 11 15C11 14.4477 11.4477 14 12 14C12.5523 14 13 14.4477 13 15C13 15.5523 12.5523 16 12 16Z" />
                  </svg>
                </a>

                <a
                  href="#"
                  className="mx-2 text-white transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                  aria-label="Facebook"
                >
                  <svg
                    className="w-5 h-5 fill-current"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M22 12C22 6.48 17.52 2 12 2S2 6.48 2 12C2 16.84 5.4 20.9 10 21.8V14H7v-2h3V9.5C10 7.57 11.57 6 13.5 6H17v2h-2.5C13.67 8 13 8.67 13 9.5V12h4l-1 2h-3v7.8c4.6-.9 8-4.96 8-9.8Z" />
                  </svg>
                </a>

                <a
                  href="#"
                  className="mx-2 text-white transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                  aria-label="Github"
                >
                  <svg
                    className="w-5 h-5 fill-current"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 2C6.48 2 2 6.58 2 12.2c0 4.47 2.87 8.26 6.84 9.6.5.1.66-.22.66-.48v-1.7c-2.78.62-3.37-1.37-3.37-1.37-.46-1.18-1.12-1.5-1.12-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.04 1.53 1.04.9 1.56 2.36 1.1 2.94.84.09-.66.35-1.1.64-1.35-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.74-.1-.25-.45-1.3.1-2.7 0 0 .84-.27 2.75 1.03a9.48 9.48 0 0 1 5 0c1.9-1.3 2.74-1.03 2.74-1.03.56 1.4.21 2.45.1 2.7.64.71 1.03 1.62 1.03 2.74 0 3.94-2.34 4.8-4.57 5.06.36.32.69.94.69 1.9v2.82c0 .26.16.58.67.48A10.19 10.19 0 0 0 22 12.2C22 6.58 17.52 2 12 2Z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-6 lg:mt-0 lg:flex-1">
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
              <div>
                <h3 className="text-white font-semibold uppercase dark:text-white">
                  About
                </h3>
                <a
                  href="#"
                  className="block mt-2 text-sm text-white dark:text-gray-400 hover:underline"
                >
                  Company
                </a>
                <a
                  href="#"
                  className="block mt-2 text-sm text-white dark:text-gray-400 hover:underline"
                >
                  Community
                </a>
                <a
                  href="#"
                  className="block mt-2 text-sm text-white dark:text-gray-400 hover:underline"
                >
                  Careers
                </a>
              </div>

              <div>
                <h3 className="text-white font-semibold uppercase dark:text-white">
                  Blog
                </h3>
                <a
                  href="#"
                  className="block mt-2 text-sm text-white dark:text-gray-400 hover:underline"
                >
                  Tech
                </a>
                <a
                  href="#"
                  className="block mt-2 text-sm text-white dark:text-gray-400 hover:underline"
                >
                  Music
                </a>
                <a
                  href="#"
                  className="block mt-2 text-sm text-white dark:text-gray-400 hover:underline"
                >
                  Videos
                </a>
              </div>

              <div>
                <h3 className="text-white font-semibold uppercase dark:text-white">
                  Products
                </h3>
                <a
                  href="#"
                  className="block mt-2 text-sm text-white dark:text-gray-400 hover:underline"
                >
                  Pricing
                </a>
                <a
                  href="#"
                  className="block mt-2 text-sm text-white dark:text-gray-400 hover:underline"
                >
                  Features
                </a>
                <a
                  href="#"
                  className="block mt-2 text-sm text-white dark:text-gray-400 hover:underline"
                >
                  Integrations
                </a>
              </div>

              <div>
                <h3 className="text-white font-semibold uppercase dark:text-white">
                  Contact
                </h3>
                <a
                  href="#"
                  className="block mt-2 text-sm text-white dark:text-gray-400 hover:underline"
                >
                  Help Center
                </a>
                <a
                  href="#"
                  className="block mt-2 text-sm text-white dark:text-gray-400 hover:underline"
                >
                  Support
                </a>
                <a
                  href="#"
                  className="block mt-2 text-sm text-white dark:text-gray-400 hover:underline"
                >
                  Privacy Policy
                </a>
              </div>
            </div>
          </div>
        </div>

        <hr className="h-px my-6 bg-gray-200 border-none dark:bg-gray-700" />

        <div>
          <p className="text-center text-white dark:text-gray-400">
            © Brand 2025 - All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
