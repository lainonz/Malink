import profile from "./assets/images/profile.jpg";

const App = () => {
  return (
    <>
      <div className="flex flex-col h-screen">
        <div className="h-[20%] md:h-[30%] bg-bgBlue"></div>
        <div className="flex-1 bg-bgDark">
          <div className="relative">
            <div className="absolute md:w-[600px] -top-[75px] left-1/2 -translate-x-1/2">
              <img
                src={profile}
                alt="Kaela"
                width={130}
                height={130}
                className="rounded-full object-cover border-[2px] mx-auto border-bgDark"
              />
              <div className="flex items-center justify-center mt-2">
                <h1 className="text-2xl w-auto text-white text-textPrimary font-bold">
                  Herlangga Maulani
                </h1>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                  className="ml-2 h-5 w-5 fill-blue-500"
                >
                  <path d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"></path>
                </svg>
              </div>
              <div className="flex items-center space-x-1 justify-center my-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 512"
                  className="w-4 h-4 fill-white opacity-30"
                >
                  <path d="M562.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L405.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C189.5 251.2 196 330 246 380c56.5 56.5 148 56.5 204.5 0L562.8 267.7zM43.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C57 372 57 321 88.5 289.5L200.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C416.5 260.8 410 182 360 132c-56.5-56.5-148-56.5-204.5 0L43.2 244.3z" />
                </svg>
                <a
                  href="https://herlangga.my.id"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-500 opacity-60 underline text-sm"
                >
                  herlangga.my.id
                </a>
              </div>
              <div>
                <p className="text-textPrimary opacity-60 text-center">
                  fullstack developer | linux enthusiast
                </p>
              </div>
              <div className="flex flex-wrap justify-center space-x-2">
                <span className="block py-1 px-3 my-2 text-white border-[1px] rounded-full border-bgBlue text-sm">
                  🐧 Linux
                </span>
                <span className="block py-1 px-3 my-2 text-white border-[1px] rounded-full border-bgBlue text-sm">
                  🌸 Anime
                </span>
                <span className="block py-1 px-3 my-2 text-white border-[1px] rounded-full border-bgBlue text-sm">
                  🧑🏼‍💻 Developer
                </span>
              </div>
              <div className="w-[350px] md:w-full px-1">
                <div className="relative flex cursor-pointer bg-boxLink transition-all hover:bg-boxLogo hover:bg-opacity-80 space-x-2 rounded-md items-center mt-3">
                  <div className="py-6 px-7 bg-boxLogo rounded-l-md">🌊</div>
                  <div className="pl-3">
                    <h1 className="text-textPrimary opacity-80 font-medium">
                      My dotfiles
                    </h1>
                    <p className="text-textPrimary opacity-60 text-sm">
                      my linux dotfiles
                    </p>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    className="fill-textPrimary opacity-60 w-[15px] h-[15px] absolute right-5"
                  >
                    <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                  </svg>
                </div>
                <div className="relative flex cursor-pointer bg-boxLink transition-all hover:bg-boxLogo hover:bg-opacity-80 space-x-2 rounded-md items-center mt-3">
                  <div className="py-6 px-7 bg-boxLogo rounded-l-md">🌏</div>
                  <div className="pl-3">
                    <h1 className="text-textPrimary opacity-80 font-medium">
                      My portfolio
                    </h1>
                    <p className="text-textPrimary opacity-60 text-sm">
                      my portfolio website
                    </p>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    className="fill-textPrimary opacity-60 w-[15px] h-[15px] absolute right-5"
                  >
                    <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
