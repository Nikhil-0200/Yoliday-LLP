import { dashboardIcon, Vector } from "../assets/icons";

const Nav = () => {
  return (
    <>
      <>
        <nav className="fixed top-0 z-40 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
          <div className="px-3 py-3 lg:px-5 lg:pl-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center justify-start rtl:justify-end">
                <button
                  data-drawer-target="logo-sidebar"
                  data-drawer-toggle="logo-sidebar"
                  aria-controls="logo-sidebar"
                  type="button"
                  className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                >
                  <span className="sr-only">Open sidebar</span>
                  <svg
                    className="w-6 h-6"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      clipRule="evenodd"
                      fillRule="evenodd"
                      d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                    />
                  </svg>
                </button>
                {/* <a href="https://flowbite.com" className="flex ms-2 md:me-24">
                  <img
                    src="https://flowbite.com/docs/images/logo.svg"
                    className="h-8 me-3"
                    alt="FlowBite Logo"
                  />
                  <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
                    Flowbite
                  </span>
                </a> */}
              </div>
              <div className="flex items-center">
                <div className="flex items-center ms-3">
                  <div>
                    <button
                      type="button"
                      className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                      aria-expanded="false"
                      data-dropdown-toggle="dropdown-user"
                    >
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="w-8 h-8 rounded-full"
                        src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                        alt="user photo"
                      />
                    </button>
                  </div>
                  <div
                    className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600"
                    id="dropdown-user"
                  >
                    <div className="px-4 py-3" role="none">
                      <p
                        className="text-sm text-gray-900 dark:text-white"
                        role="none"
                      >
                        Neil Sims
                      </p>
                      <p
                        className="text-sm font-medium text-gray-900 truncate dark:text-gray-300"
                        role="none"
                      >
                        neil.sims@flowbite.com
                      </p>
                    </div>
                    <ul className="py-1" role="none">
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                          role="menuitem"
                        >
                          Dashboard
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                          role="menuitem"
                        >
                          Settings
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                          role="menuitem"
                        >
                          Earnings
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                          role="menuitem"
                        >
                          Sign out
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <aside
          id="logo-sidebar"
          className="fixed top-0 left-0 z-50 w-64 h-screen transition-transform -translate-x-full bg-[#DF5532] border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
          aria-label="Sidebar"
        >
          <div className="h-full px-0 pb-4 overflow-y-auto bg-[#DF5532] text-[#EEFFEEFE]">
            <div className="text-sm font-roboto py-2 w-full">
              <a
                href="#"
                className=" flex items-center px-5 p-2 rounded-lg dark:text-white hover:bg-gradient-to-r from-[#FFAD98] to-[#DF5532] group"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 23.4844C5.65734 23.4844 0.515625 18.3427 0.515625 12C0.515625 5.65734 5.65734 0.515625 12 0.515625C18.3427 0.515625 23.4844 5.65734 23.4844 12C23.4844 18.3427 18.3427 23.4844 12 23.4844ZM12 22.6641C17.8896 22.6641 22.6641 17.8896 22.6641 12C22.6641 6.11039 17.8896 1.33594 12 1.33594C6.11039 1.33594 1.33594 6.11039 1.33594 12C1.33594 17.8896 6.11039 22.6641 12 22.6641Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3.11523 8.07383C3.60672 6.89844 4.31195 6.21523 4.50238 6.02199C4.69281 5.82887 4.96316 5.92309 5.14422 6.02199C5.32527 6.12101 9.86371 10.6668 10.0663 10.8951C10.2688 11.1234 10.4835 11.4639 9.90215 11.4639C9.32066 11.4639 3.60824 11.414 3.11523 11.38C2.62211 11.3459 2.47656 11.0584 2.47656 10.8127C2.47656 10.5671 2.62363 9.24933 3.11523 8.07383ZM8.6057 3.01684C9.78449 2.5332 10.6248 2.56496 10.8961 2.56309C11.1674 2.56121 11.2919 2.81891 11.35 3.01684C11.408 3.21488 11.4502 9.67719 11.432 9.98176C11.4137 10.2864 11.4188 10.6243 11.0077 10.2131C10.5965 9.80199 6.59242 5.72738 6.26793 5.35473C5.94332 4.98195 6.04375 4.67562 6.21754 4.50195C6.39121 4.32828 7.4268 3.50059 8.6057 3.01684ZM15.8118 3.11328C16.9872 3.60477 17.6704 4.31 17.8636 4.50043C18.0568 4.69086 17.9625 4.96121 17.8636 5.14226C17.7646 5.32332 13.2188 9.86176 12.9905 10.0644C12.7622 10.2669 12.4217 10.4816 12.4217 9.90019C12.4217 9.31871 12.4716 3.60629 12.5056 3.11328C12.5397 2.62016 12.8273 2.47461 13.0729 2.47461C13.3185 2.47461 14.6363 2.62168 15.8118 3.11328ZM20.8688 8.60375C21.3524 9.78254 21.3207 10.6229 21.3225 10.8942C21.3244 11.1655 21.0667 11.2899 20.8688 11.348C20.6707 11.4061 14.2084 11.4482 13.9039 11.4301C13.5992 11.4118 13.2613 11.4168 13.6725 11.0057C14.0836 10.5945 18.1582 6.59047 18.5309 6.26598C18.9037 5.94137 19.21 6.0418 19.3837 6.21559C19.5573 6.38926 20.385 7.42484 20.8688 8.60375ZM20.7723 15.927C20.2809 17.1024 19.5756 17.7856 19.3852 17.9789C19.1948 18.172 18.9244 18.0778 18.7434 17.9789C18.5623 17.8798 14.0239 13.334 13.8212 13.1057C13.6187 12.8775 13.4041 12.5369 13.9854 12.5369C14.5669 12.5369 20.2793 12.5868 20.7723 12.6208C21.2655 12.6549 21.411 12.9425 21.411 13.1881C21.411 13.4337 21.2639 14.7515 20.7723 15.927ZM15.2819 20.984C14.1031 21.4677 13.2627 21.4359 12.9914 21.4378C12.7202 21.4396 12.5957 21.1819 12.5376 20.984C12.4796 20.786 12.4374 14.3237 12.4555 14.0191C12.4738 13.7144 12.4688 13.3766 12.8799 13.7878C13.2911 14.1989 17.2952 18.2735 17.6196 18.6461C17.9443 19.0189 17.8438 19.3252 17.67 19.4989C17.4964 19.6726 16.4607 20.5003 15.2818 20.984H15.2819ZM8.07578 20.8876C6.90039 20.3961 6.21719 19.6909 6.02394 19.5004C5.83082 19.31 5.92504 19.0396 6.02394 18.8586C6.12297 18.6775 10.6688 14.1391 10.8971 13.9365C11.1253 13.734 11.4659 13.5193 11.4659 14.1007C11.4659 14.6821 11.416 20.3946 11.382 20.8876C11.3479 21.3807 11.0603 21.5262 10.8147 21.5262C10.5691 21.5262 9.25129 21.3792 8.07578 20.8876ZM3.01879 15.3971C2.53516 14.2183 2.56691 13.378 2.56504 13.1067C2.56316 12.8354 2.82086 12.7109 3.01879 12.6528C3.21684 12.5948 9.67914 12.5526 9.98371 12.5708C10.2884 12.5891 10.6262 12.584 10.215 12.9951C9.80394 13.4063 5.72934 17.4104 5.35668 17.7349C4.98391 18.0595 4.67758 17.9591 4.50391 17.7853C4.33023 17.6116 3.50254 16.5759 3.01879 15.397V15.3971Z"
                    fill="white"
                  />
                </svg>

                <span className="ms-3 ">LOGO</span>
              </a>
            </div>
            <ul className="space-y-2 pt-20 font-[400] text-sm font-roboto">
              <li className="h-[37px]">
                <a
                  href="#"
                  className="flex items-center px-5 p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gradient-to-r from-[#FFAD98] to-[#DF5532] dark:hover:bg-gray-700 group text-[#EEFFEEFE]"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M2.125 5.875V2.125H5.875V5.875H2.125ZM0.25 1.5C0.25 1.16848 0.381696 0.850537 0.616116 0.616116C0.850537 0.381696 1.16848 0.25 1.5 0.25H6.5C6.83152 0.25 7.14946 0.381696 7.38388 0.616116C7.6183 0.850537 7.75 1.16848 7.75 1.5V6.5C7.75 6.83152 7.6183 7.14946 7.38388 7.38388C7.14946 7.6183 6.83152 7.75 6.5 7.75H1.5C1.16848 7.75 0.850537 7.6183 0.616116 7.38388C0.381696 7.14946 0.25 6.83152 0.25 6.5V1.5ZM10.25 1.8125C10.25 1.56386 10.3488 1.3254 10.5246 1.14959C10.7004 0.973772 10.9389 0.875 11.1875 0.875H16.8125C17.0611 0.875 17.2996 0.973772 17.4754 1.14959C17.6512 1.3254 17.75 1.56386 17.75 1.8125C17.75 2.06114 17.6512 2.2996 17.4754 2.47541C17.2996 2.65123 17.0611 2.75 16.8125 2.75H11.1875C10.9389 2.75 10.7004 2.65123 10.5246 2.47541C10.3488 2.2996 10.25 2.06114 10.25 1.8125ZM11.1875 5.25C10.9389 5.25 10.7004 5.34877 10.5246 5.52459C10.3488 5.7004 10.25 5.93886 10.25 6.1875C10.25 6.43614 10.3488 6.6746 10.5246 6.85041C10.7004 7.02623 10.9389 7.125 11.1875 7.125H16.8125C17.0611 7.125 17.2996 7.02623 17.4754 6.85041C17.6512 6.6746 17.75 6.43614 17.75 6.1875C17.75 5.93886 17.6512 5.7004 17.4754 5.52459C17.2996 5.34877 17.0611 5.25 16.8125 5.25H11.1875ZM2.125 12.125V15.875H5.875V12.125H2.125ZM1.5 10.25C1.16848 10.25 0.850537 10.3817 0.616116 10.6161C0.381696 10.8505 0.25 11.1685 0.25 11.5V16.5C0.25 16.8315 0.381696 17.1495 0.616116 17.3839C0.850537 17.6183 1.16848 17.75 1.5 17.75H6.5C6.83152 17.75 7.14946 17.6183 7.38388 17.3839C7.6183 17.1495 7.75 16.8315 7.75 16.5V11.5C7.75 11.1685 7.6183 10.8505 7.38388 10.6161C7.14946 10.3817 6.83152 10.25 6.5 10.25H1.5ZM11.1875 10.875C10.9389 10.875 10.7004 10.9738 10.5246 11.1496C10.3488 11.3254 10.25 11.5639 10.25 11.8125C10.25 12.0611 10.3488 12.2996 10.5246 12.4754C10.7004 12.6512 10.9389 12.75 11.1875 12.75H16.8125C17.0611 12.75 17.2996 12.6512 17.4754 12.4754C17.6512 12.2996 17.75 12.0611 17.75 11.8125C17.75 11.5639 17.6512 11.3254 17.4754 11.1496C17.2996 10.9738 17.0611 10.875 16.8125 10.875H11.1875ZM11.1875 15.25C10.9389 15.25 10.7004 15.3488 10.5246 15.5246C10.3488 15.7004 10.25 15.9389 10.25 16.1875C10.25 16.4361 10.3488 16.6746 10.5246 16.8504C10.7004 17.0262 10.9389 17.125 11.1875 17.125H16.8125C17.0611 17.125 17.2996 17.0262 17.4754 16.8504C17.6512 16.6746 17.75 16.4361 17.75 16.1875C17.75 15.9389 17.6512 15.7004 17.4754 15.5246C17.2996 15.3488 17.0611 15.25 16.8125 15.25H11.1875Z"
                      fill="#EEFFEE"
                      fill-opacity="0.996078"
                    />
                  </svg>
                  <span className="ms-3 ">Dashboard</span>
                </a>
              </li>
              <li className="h-[37px]">
                <a
                  href="#"
                  className="flex items-center px-5 p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gradient-to-r from-[#FFAD98] to-[#DF5532] dark:hover:bg-gray-700 group text-[#EEFFEEFE]"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18 13V11H22V13H18ZM19.2 20L16 17.6L17.2 16L20.4 18.4L19.2 20ZM17.2 8L16 6.4L19.2 4L20.4 5.6L17.2 8ZM5 19V15H4C3.45 15 2.97933 14.8043 2.588 14.413C2.19667 14.0217 2.00067 13.5507 2 13V11C2 10.45 2.196 9.97933 2.588 9.588C2.98 9.19667 3.45067 9.00067 4 9H8L13 6V18L8 15H7V19H5ZM14 15.35V8.65C14.45 9.05 14.8127 9.53767 15.088 10.113C15.3633 10.6883 15.5007 11.3173 15.5 12C15.5 12.6833 15.3623 13.3127 15.087 13.888C14.8117 14.4633 14.4493 14.9507 14 15.35Z"
                      fill="white"
                    />
                  </svg>

                  <span className="flex-1 ms-3 whitespace-nowrap">
                    Portfolio
                  </span>
                </a>
              </li>
              <li className="h-[37px]">
                <a
                  href="#"
                  className="flex items-center px-5 p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gradient-to-r from-[#FFAD98] to-[#DF5532] dark:hover:bg-gray-700 group text-[#EEFFEEFE]"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.8 10.95L10.95 8.775L9.55 7.35L8.45 8.45L7.05 7.05L8.125 5.95L7 4.825L4.825 7L8.8 10.95ZM17 19.175L19.175 17L18.05 15.875L16.95 16.95L15.55 15.55L16.625 14.45L15.2 13.05L13.05 15.2L17 19.175ZM7.25 21H3V16.75L7.375 12.375L2 7L7 2L12.4 7.4L17.625 2.15L21.825 6.4L16.625 11.625L22 17L17 22L11.625 16.625L7.25 21ZM5 19H6.4L16.2 9.225L14.775 7.8L5 17.6V19ZM15.5 8.525L14.775 7.8L16.2 9.225L15.5 8.525Z"
                      fill="white"
                    />
                  </svg>

                  <span className="flex-1 ms-3 whitespace-nowrap">Inputs</span>
                </a>
              </li>
              <li className="h-[37px]">
                <a
                  href="#"
                  className="flex items-center px-5 p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gradient-to-r from-[#FFAD98] to-[#DF5532] dark:hover:bg-gray-700 group text-[#EEFFEEFE]"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 23V21H20V23H4ZM4 3V1H20V3H4ZM12 13C12.8333 13 13.5417 12.7083 14.125 12.125C14.7083 11.5417 15 10.8333 15 10C15 9.16667 14.7083 8.45833 14.125 7.875C13.5417 7.29167 12.8333 7 12 7C11.1667 7 10.4583 7.29167 9.875 7.875C9.29167 8.45833 9 9.16667 9 10C9 10.8333 9.29167 11.5417 9.875 12.125C10.4583 12.7083 11.1667 13 12 13ZM4 20C3.45 20 2.97933 19.8043 2.588 19.413C2.19667 19.0217 2.00067 18.5507 2 18V6C2 5.45 2.196 4.97933 2.588 4.588C2.98 4.19667 3.45067 4.00067 4 4H20C20.55 4 21.021 4.196 21.413 4.588C21.805 4.98 22.0007 5.45067 22 6V18C22 18.55 21.8043 19.021 21.413 19.413C21.0217 19.805 20.5507 20.0007 20 20H4ZM5.75 18H18.25C17.5 17.0667 16.5917 16.3333 15.525 15.8C14.4583 15.2667 13.2833 15 12 15C10.7167 15 9.54167 15.2667 8.475 15.8C7.40833 16.3333 6.5 17.0667 5.75 18Z"
                      fill="white"
                    />
                  </svg>

                  <span className="flex-1 ms-3 whitespace-nowrap">Profile</span>
                </a>
              </li>
            </ul>
          </div>
        </aside>
        <div className="p-4 sm:ml-64">
          <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
                <p className="text-2xl text-gray-400 dark:text-gray-500">
                  <svg
                    className="w-3.5 h-3.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 18"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 1v16M1 9h16"
                    />
                  </svg>
                </p>
              </div>
              <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
                <p className="text-2xl text-gray-400 dark:text-gray-500">
                  <svg
                    className="w-3.5 h-3.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 18"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 1v16M1 9h16"
                    />
                  </svg>
                </p>
              </div>
              <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
                <p className="text-2xl text-gray-400 dark:text-gray-500">
                  <svg
                    className="w-3.5 h-3.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 18"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 1v16M1 9h16"
                    />
                  </svg>
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
              <p className="text-2xl text-gray-400 dark:text-gray-500">
                <svg
                  className="w-3.5 h-3.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 1v16M1 9h16"
                  />
                </svg>
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                <p className="text-2xl text-gray-400 dark:text-gray-500">
                  <svg
                    className="w-3.5 h-3.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 18"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 1v16M1 9h16"
                    />
                  </svg>
                </p>
              </div>
              <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                <p className="text-2xl text-gray-400 dark:text-gray-500">
                  <svg
                    className="w-3.5 h-3.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 18"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 1v16M1 9h16"
                    />
                  </svg>
                </p>
              </div>
              <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                <p className="text-2xl text-gray-400 dark:text-gray-500">
                  <svg
                    className="w-3.5 h-3.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 18"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 1v16M1 9h16"
                    />
                  </svg>
                </p>
              </div>
              <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                <p className="text-2xl text-gray-400 dark:text-gray-500">
                  <svg
                    className="w-3.5 h-3.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 18"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 1v16M1 9h16"
                    />
                  </svg>
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
              <p className="text-2xl text-gray-400 dark:text-gray-500">
                <svg
                  className="w-3.5 h-3.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 1v16M1 9h16"
                  />
                </svg>
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                <p className="text-2xl text-gray-400 dark:text-gray-500">
                  <svg
                    className="w-3.5 h-3.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 18"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 1v16M1 9h16"
                    />
                  </svg>
                </p>
              </div>
              <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                <p className="text-2xl text-gray-400 dark:text-gray-500">
                  <svg
                    className="w-3.5 h-3.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 18"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 1v16M1 9h16"
                    />
                  </svg>
                </p>
              </div>
              <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                <p className="text-2xl text-gray-400 dark:text-gray-500">
                  <svg
                    className="w-3.5 h-3.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 18"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 1v16M1 9h16"
                    />
                  </svg>
                </p>
              </div>
              <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                <p className="text-2xl text-gray-400 dark:text-gray-500">
                  <svg
                    className="w-3.5 h-3.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 18"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 1v16M1 9h16"
                    />
                  </svg>
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default Nav;
