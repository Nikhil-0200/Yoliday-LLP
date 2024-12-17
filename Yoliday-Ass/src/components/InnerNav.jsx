import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/16/solid";
// import {BellIcon, XMarkIcon } from '@heroicons/react'

import classNames from "classnames";
import { Link, Outlet, useLocation } from "react-router-dom";
import MobileNav from "./MobileNav";

const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};

const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];

export const InnerNav = () => {
  const location = useLocation();

  const navigation = [
    { name: "Project", href: "", current: location.pathname === "/portfolio" },
    {
      name: "Saved",
      href: "saved",
      current: location.pathname === "/portfolio/saved",
    },
    {
      name: "Shared",
      href: "shared",
      current: location.pathname === "/portfolio/shared",
    },
    {
      name: "Achievement",
      href: "achievement",
      current: location.pathname === "/portfolio/achievement",
    },
  ];

  return (
    <>
      <div className="min-h-full">
        <Disclosure as="nav" className="bg-[#FFFFFF]">
          <div className="mx-auto max-w-full max-md:px-0 px-4 max-md:pl-0 sm:px-0 lg:px-0">
            <div className="lg:flex lg:flex-row lg:justify-around lg:h-20 items-center justify-between">
              <div className="flex-col items-center lg:w-[50%] max-lg:mb-5">
                <div className="text-[Portfolio] font-roboto font-semibold text-[22px] max-md:p-[12px] flex items-center justify-between max-md:h-24">
                  <h1>Portfolio</h1>
                  <div className="max-md:flex hidden gap-10">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 16 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14 4H12C12 1.79 10.21 0 8 0C5.79 0 4 1.79 4 4H2C0.9 4 0 4.9 0 6V18C0 19.1 0.9 20 2 20H14C15.1 20 16 19.1 16 18V6C16 4.9 15.1 4 14 4ZM6 8C6 8.55 5.55 9 5 9C4.45 9 4 8.55 4 8V6H6V8ZM8 2C9.1 2 10 2.9 10 4H6C6 2.9 6.9 2 8 2ZM12 8C12 8.55 11.55 9 11 9C10.45 9 10 8.55 10 8V6H12V8Z"
                        fill="#DF5532"
                      />
                    </svg>

                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 16 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8 20C9.1 20 10 19.1 10 18H6C6 18.5304 6.21071 19.0391 6.58579 19.4142C6.96086 19.7893 7.46957 20 8 20ZM14 14V9C14 5.93 12.36 3.36 9.5 2.68V2C9.5 1.17 8.83 0.5 8 0.5C7.17 0.5 6.5 1.17 6.5 2V2.68C3.63 3.36 2 5.92 2 9V14L0 16V17H16V16L14 14Z"
                        fill="#DF5532"
                      />
                    </svg>
                  </div>
                </div>
                <div className="">
                  <div className="ml-0 flex max-md:justify-center items-baseline font-roboto border-b-[1px]">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        aria-current={item.current ? "page" : undefined}
                        className={classNames(
                          item.current
                            ? "border-b-[3px] border-[#DF5532] text-[#DF5532]"
                            : "text-[#303030]",
                          "max-md:px-2 px-5 py-2 text-[14px] font-normal max-md:w-[100%] max-md:text-center"
                        )}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className=" md:block lg:w-[50%] lg:flex lg:justify-around max-md:px-4">
                <div className="lg:ml-4 flex items-center lg:justify-end lg:w-full gap-6">
                  <button
                    type="button"
                    className="relative p-1 text-[#303030] lg:flex text-[16px] items-center gap-[4px] hidden"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="solid"
                      viewBox="0 0 24 24"
                      strokeWidth="0.1"
                      stroke="black"
                      className="size-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z"
                      />
                    </svg>
                    Filter
                  </button>

                  {/* Input Tag */}
                  <div className="lg:w-[75%] w-full">
                    <form className="max-w-xl mx-auto">
                      <label
                        htmlFor="default-search"
                        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                      >
                        Search
                      </label>
                      <div className="relative">
                        <input
                          type="search"
                          id="default-search"
                          className="block w-full font-roboto p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="Search a project"
                          required=""
                        />
                        <button
                          type="submit"
                          className="text-white absolute end-2.5 bottom-2.5 bg-[#DF5532] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-xl text-sm px-2 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10.3333 9.33334H9.80667L9.62 9.15334C10.2959 8.36935 10.6674 7.36846 10.6667 6.33334C10.6667 5.47628 10.4125 4.63848 9.93637 3.92586C9.46022 3.21325 8.78344 2.65784 7.99163 2.32986C7.19982 2.00188 6.32853 1.91606 5.48794 2.08327C4.64736 2.25047 3.87523 2.66318 3.26921 3.26921C2.66318 3.87523 2.25047 4.64736 2.08327 5.48794C1.91606 6.32853 2.00188 7.19982 2.32986 7.99163C2.65784 8.78344 3.21325 9.46022 3.92586 9.93637C4.63848 10.4125 5.47628 10.6667 6.33334 10.6667C7.40667 10.6667 8.39334 10.2733 9.15334 9.62L9.33334 9.80667V10.3333L12.6667 13.66L13.66 12.6667L10.3333 9.33334ZM6.33334 9.33334C4.67334 9.33334 3.33334 7.99334 3.33334 6.33334C3.33334 4.67334 4.67334 3.33334 6.33334 3.33334C7.99334 3.33334 9.33334 4.67334 9.33334 6.33334C9.33334 7.99334 7.99334 9.33334 6.33334 9.33334Z"
                              fill="white"
                            />
                          </svg>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Disclosure>

        <main className="bg-white">
          <div className="mx-auto max-w-full px-4 py-6 sm:px-0 lg:px-0">
            <Outlet />
            <MobileNav/>
          </div>
        </main>
      </div>
    </>
  );
};
