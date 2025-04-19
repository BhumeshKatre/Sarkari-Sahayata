import React from "react";
import logoImg from "../assets/logo-2.png";
import { Link } from "react-router-dom";
const Navbar = ({ menu }) => {
  console.log(menu);
  return (
      <nav class="bg-white border-gray-200 dark:border-gray-600 dark:bg-gray-900 sticky top-0 z-50 shadow-md">
        <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl ">
          <Link
            href="https://flowbite.com"
            class="flex items-center  rtl:space-x-reverse"
          >
            <img src={logoImg} class="h-20 w-32" alt="Flowbite Logo" />
          </Link>
          <button
            data-collapse-toggle="mega-menu-full"
            type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mega-menu-full"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            id="mega-menu-full"
            class="items-center justify-between font-medium hidden w-full md:flex md:w-auto md:order-1"
          >
            <ul class="flex flex-col  md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              {menu.map((item) => (
                <li key={item.id}>
                  <Link
                    to={item.link || '/'}
                    className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    {item.title}
                  </Link>

                </li>
              ))}
            </ul>
          </div>
        </div>
        <div
          id="mega-menu-full-dropdown"
          class="mt-1 border-gray-200 shadow-xs bg-gray-50 md:bg-white border-y dark:bg-gray-800 dark:border-gray-600"
        ></div>
      </nav>
  );
};

export default Navbar;
