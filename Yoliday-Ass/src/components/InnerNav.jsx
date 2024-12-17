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

const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};
const navigation = [
  { name: "Project", href: "#", current: true },
  { name: "Saved", href: "#", current: false },
  { name: "Shared", href: "#", current: false },
  { name: "Achievment", href: "#", current: false },
];
const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];

export const InnerNav = () => {
  return (
    <>
      <div className="min-h-full">
        <Disclosure as="nav" className="bg-[#FFFFFF]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-20 items-center justify-between">
              <div className="flex-col items-center w-[50%] ">
                <div className="text-[Portfolio] font-roboto font-semibold text-[22px]">
                  Portfolio
                </div>
                <div className="hidden md:block">
                  <div className="ml-0 flex items-baseline space-x-4 font-roboto border-b-2 ">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        aria-current={item.current ? "page" : undefined}
                        className={classNames(
                          item.current
                            ? "border-b-[3px] border-[#DF5532] text-[#DF5532]"
                            : "text-[#303030]",
                          "px-3 py-2 text-[14px] font-normal"
                        )}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="hidden md:block w-[50%]">
                <div className="ml-4 flex items-center justify-end">
                  <button
                    type="button"
                    className="relative p-1 text-[#303030] hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 flex text-[16px] items-center gap-[4px]"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="solid"
                      viewBox="0 0 24 24"
                      stroke-width="0.1"
                      stroke="black"
                      class="size-5"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z"
                      />
                    </svg>
                    Filter
                  </button>

                  {/* Input Tag */}
                  <div>
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

        <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              Dashboard
            </h1>
          </div>
        </header>
        <main>
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            {/* Your content */}
          </div>
        </main>
      </div>
    </>
  );
};
