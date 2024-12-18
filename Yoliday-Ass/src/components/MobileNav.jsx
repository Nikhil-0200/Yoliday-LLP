import { Link } from "react-router-dom";

const MobileNav = () => {
  return (
    <div>
      <button
        type="button"
        className="sm:hidden fixed bottom-16 left-1/2 transform -translate-x-1/2 z-50 text-[#FFFFFF] bg-[#DF5532] font-normal rounded-full  px-6 py-2 text-center me-2 mb-2 font-roboto text-[14px] flex items-center gap-3"
      >
        <svg
          width="18"
          height="12"
          viewBox="0 0 18 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7 12H11V10H7V12ZM0 0V2H18V0H0ZM3 7H15V5H3V7Z"
            fill="white"
          />
        </svg>
        Filter
      </button>

      <div className=" sm:hidden fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600 rounded-t-3xl overflow-hidden shadow-custom">
        <div className="grid h-full max-w-lg grid-cols-4 mx-auto font-medium font-roboto">
          <Link
            to="/"
            className="inline-flex flex-col items-center justify-center px-5 group relative"
          >
            <div className=" border-t-2 border-white group-hover:border-[#DF5532] group-active:border-[#DF5532] flex flex-col items-center gap-1 pt-2">
              <svg
                width="24"
                height="24"
                viewBox="0 0 18 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="group"
              >
                <path
                  d="M11.0001 11.9997H7.00012V18.9997H11.0001V11.9997Z"
                  className="fill-[#D6D1D5] group-hover:fill-[#DF5532] group-active:fill-[#DF5532]"
                />
                <path
                  d="M17.4201 8.1797L9.71012 0.299705C9.61715 0.205976 9.50655 0.131582 9.38469 0.0808132C9.26283 0.0300445 9.13213 0.00390625 9.00012 0.00390625C8.8681 0.00390625 8.7374 0.0300445 8.61554 0.0808132C8.49368 0.131582 8.38308 0.205976 8.29012 0.299705L0.580115 8.1897C0.393552 8.37777 0.24621 8.60103 0.146643 8.84651C0.0470768 9.092 -0.00272978 9.35481 0.000115364 9.6197V17.9997C-0.00065946 18.5116 0.194889 19.0043 0.54649 19.3764C0.898091 19.7485 1.37898 19.9715 1.89012 19.9997H5.00012V10.9997C5.00012 10.7345 5.10547 10.4801 5.29301 10.2926C5.48055 10.1051 5.7349 9.9997 6.00012 9.9997H12.0001C12.2653 9.9997 12.5197 10.1051 12.7072 10.2926C12.8948 10.4801 13.0001 10.7345 13.0001 10.9997V19.9997H16.1101C16.6213 19.9715 17.1021 19.7485 17.4537 19.3764C17.8053 19.0043 18.0009 18.5116 18.0001 17.9997V9.6197C18.0009 9.08264 17.7929 8.56629 17.4201 8.1797Z"
                  className="fill-[#D6D1D5] group-hover:fill-[#DF5532] group-active:fill-[#DF5532]"
                />
              </svg>

              <span className="text-sm text-[#D6D1D5] dark:text-[#D6D1D5] group-hover:text-[#DF5532] dark:group-hover:text-[#DF5532] ">
                Home
              </span>
            </div>
          </Link>
          <Link
            to="/portfolio"
            className="inline-flex flex-col items-center justify-center px-5 group relative gap-[6px]"
          >
            <div className=" border-t-2 border-white group-hover:border-[#DF5532] group-active:border-[#DF5532] flex flex-col items-center gap-1 pt-2">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
                className="group"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  fill="#D6D1D5"
                  d="M0 13.0871C3.07032 14.4924 6.31046 15.3167 9.6 15.5294V18.3529H14.4V15.5294C17.6816 15.2876 20.9157 14.4839 24 13.1435V24H0V13.0871ZM15.6 0L16.8 1.41176V4.23529H24V11.5906C20.3206 13.2068 16.4312 14.0617 12.504 14.1176H11.64C7.66007 14.067 3.71921 13.1876 0 11.52V4.23529H7.2V1.41176L8.4 0H15.6ZM14.4 2.82353H9.6V4.23529H14.4V2.82353Z"
                  className="fill-[#D6D1D5] group-hover:fill-[#DF5532] group-active:fill-[#DF5532]"
                />
              </svg>

              <span className="text-sm text-[#D6D1D5] dark:text-[#D6D1D5] group-hover:text-[#DF5532] dark:group-hover:text-[#DF5532]">
                Portfolio
              </span>
            </div>
          </Link>
          <Link
            to="/inputs"
            className="inline-flex flex-col items-center justify-center px-5 group relative gap-[6px]"
          >
            <div className=" border-t-2 border-white group-hover:border-[#DF5532] group-active:border-[#DF5532] flex flex-col items-center gap-1 pt-2">
              <svg
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="group"
              >
                <path
                  d="M4.125 0C3.4293 0.000130313 2.75351 0.232298 2.20461 0.659752C1.65571 1.08721 1.26506 1.68553 1.0945 2.36C1.39982 2.25442 1.72617 2.22438 2.04563 2.27244C2.3651 2.3205 2.66816 2.44523 2.92891 2.63596C3.18965 2.82669 3.40031 3.07775 3.54286 3.36766C3.68542 3.65756 3.75562 3.97768 3.74747 4.30064C3.73932 4.62359 3.65306 4.93976 3.49607 5.22211C3.33907 5.50446 3.11602 5.74457 2.84599 5.92191C2.57596 6.09925 2.26699 6.20853 1.94551 6.24042C1.62403 6.27231 1.29961 6.22584 1 6.105V14.875C1 15.7038 1.32924 16.4987 1.91529 17.0847C2.50134 17.6708 3.2962 18 4.125 18H10.022C9.35285 16.9554 8.99809 15.7405 9 14.5C9 13.316 9.3165 12.206 9.87 11.25H6.625C6.45924 11.25 6.30027 11.1842 6.18306 11.0669C6.06585 10.9497 6 10.7908 6 10.625C6 10.4592 6.06585 10.3003 6.18306 10.1831C6.30027 10.0658 6.45924 10 6.625 10H10.81C11.9925 8.7675 13.6565 8 15.5 8C16.7885 8 17.99 8.375 19 9.022V3.125C19 2.2962 18.6708 1.50134 18.0847 0.915291C17.4987 0.32924 16.7038 0 15.875 0H4.125ZM6 7.125C6 6.78 6.28 6.5 6.625 6.5H13.375C13.4571 6.5 13.5384 6.51617 13.6142 6.54757C13.69 6.57898 13.7589 6.62502 13.8169 6.68306C13.875 6.74109 13.921 6.80999 13.9524 6.88582C13.9838 6.96165 14 7.04292 14 7.125C14 7.20708 13.9838 7.28835 13.9524 7.36418C13.921 7.44001 13.875 7.50891 13.8169 7.56694C13.7589 7.62498 13.69 7.67102 13.6142 7.70243C13.5384 7.73383 13.4571 7.75 13.375 7.75H6.625C6.28 7.75 6 7.47 6 7.125Z"
                  fill="#D6D1D5"
                  className="fill-[#D6D1D5] group-hover:fill-[#DF5532] group-active:fill-[#DF5532]"
                />
                <path
                  d="M1.75 3C1.58578 2.99974 1.42311 3.03189 1.27134 3.09461C1.11956 3.15734 0.981656 3.2494 0.865531 3.36553C0.749405 3.48166 0.657341 3.61956 0.594616 3.77133C0.531891 3.92311 0.499738 4.08577 0.500002 4.25C0.499738 4.41423 0.531891 4.57689 0.594616 4.72867C0.657341 4.88044 0.749405 5.01835 0.865531 5.13447C0.981656 5.2506 1.11956 5.34266 1.27134 5.40539C1.42311 5.46811 1.58578 5.50026 1.75 5.5C2.08152 5.5 2.39946 5.3683 2.63389 5.13388C2.86831 4.89946 3 4.58152 3 4.25C3 3.91848 2.86831 3.60054 2.63389 3.36612C2.39946 3.1317 2.08152 3 1.75 3Z"
                  fill="#D6D1D5"
                  className="fill-[#D6D1D5] group-hover:fill-[#DF5532] group-active:fill-[#DF5532]"
                />
                <path
                  d="M21 14.5C21 17.5375 18.5375 20 15.5 20C12.4625 20 10 17.5375 10 14.5C10 11.4625 12.4625 9 15.5 9C18.5375 9 21 11.4625 21 14.5ZM16 11C16 10.8674 15.9473 10.7402 15.8536 10.6464C15.7598 10.5527 15.6326 10.5 15.5 10.5C15.3674 10.5 15.2402 10.5527 15.1464 10.6464C15.0527 10.7402 15 10.8674 15 11V14H12C11.8674 14 11.7402 14.0527 11.6464 14.1464C11.5527 14.2402 11.5 14.3674 11.5 14.5C11.5 14.6326 11.5527 14.7598 11.6464 14.8536C11.7402 14.9473 11.8674 15 12 15H15V18C15 18.1326 15.0527 18.2598 15.1464 18.3536C15.2402 18.4473 15.3674 18.5 15.5 18.5C15.6326 18.5 15.7598 18.4473 15.8536 18.3536C15.9473 18.2598 16 18.1326 16 18V15H19C19.1326 15 19.2598 14.9473 19.3536 14.8536C19.4473 14.7598 19.5 14.6326 19.5 14.5C19.5 14.3674 19.4473 14.2402 19.3536 14.1464C19.2598 14.0527 19.1326 14 19 14H16V11Z"
                  fill="#D6D1D5"
                  className="fill-[#D6D1D5] group-hover:fill-[#DF5532] group-active:fill-[#DF5532]"
                />
              </svg>
              <span className="text-sm text-[#D6D1D5] dark:text-[#D6D1D5] group-hover:text-[#DF5532] dark:group-hover:text-[#DF5532]">
                Input
              </span>
            </div>
          </Link>
          <Link
            to="/profile"
            className="inline-flex flex-col items-center justify-center px-5 group relative gap-[6px]"
          >
            <div className=" border-t-2 border-white group-hover:border-[#DF5532] group-active:border-[#DF5532] flex flex-col items-center gap-1 pt-2">
              <svg
                width="18"
                height="20"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="group"
              >
                <path
                  d="M8 0C9.06087 0 10.0783 0.421427 10.8284 1.17157C11.5786 1.92172 12 2.93913 12 4C12 5.06087 11.5786 6.07828 10.8284 6.82843C10.0783 7.57857 9.06087 8 8 8C6.93913 8 5.92172 7.57857 5.17157 6.82843C4.42143 6.07828 4 5.06087 4 4C4 2.93913 4.42143 1.92172 5.17157 1.17157C5.92172 0.421427 6.93913 0 8 0ZM8 10C12.42 10 16 11.79 16 14V16H0V14C0 11.79 3.58 10 8 10Z"
                  fill="#D6D1D5"
                  className="fill-[#D6D1D5] group-hover:fill-[#DF5532] group-active:fill-[#DF5532]"
                />
              </svg>

              <span className="text-sm text-[#D6D1D5] dark:text-[#D6D1D5] group-hover:text-[#DF5532] dark:group-hover:text-[#DF5532]">
                Profile
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
