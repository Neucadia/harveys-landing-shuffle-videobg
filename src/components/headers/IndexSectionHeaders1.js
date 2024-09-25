import React, { useEffect } from "react";
import { ReactNestedMenu } from "react-nested-menu";

const menu = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Store",
    url: "/#",
    children: [
      {
        id: 3,
        title: "Men",
        url: "/#",
      },
      {
        id: 4,
        title: "Women",
        url: "/#",
      },
      {
        id: 5,
        title: "Kids",
        url: "/#",
      },
      {
        id: 6,
        title: "Footwear",
        url: "/#",
      },
      {
        id: 7,
        title: "Pet",
        url: "/#",
      },
      {
        id: 8,
        title: "Brands",
        url: "/#",
      },
      {
        id: 9,
        title: "Events",
        url: "/#",
      },
    ],
  },
  {
    id: 2,
    title: "Seed",
    url: "/#",
    children: [
      {
        id: 3,
        title: "Corn",
        url: "/#",
      },
      {
        id: 4,
        title: "Soybeans",
        url: "/#",
      },
      {
        id: 5,
        title: "Wheat",
        url: "/#",
      },
      {
        id: 6,
        title: "Cover Crop",
        url: "/#",
      },
      {
        id: 7,
        title: "Pasture Mix",
        url: "/#",
      },
      {
        id: 8,
        title: "Food Plot",
        url: "/#",
      },
    ],
  },
  {
    title: "Feed",
    url: "/#",
    children: [
      {
        id: 3,
        title: "Equine",
        url: "/#",
      },
      {
        id: 4,
        title: "Swine",
        url: "/#",
      },
      {
        id: 5,
        title: "Calf",
        url: "/#",
      },
      {
        id: 6,
        title: "Sheep",
        url: "/#",
      },
      {
        id: 7,
        title: "Goat",
        url: "/#",
      },
      {
        id: 8,
        title: "Poultry",
        url: "/#",
      },
      {
        id: 9,
        title: "Beef",
        url: "/#",
      },
      {
        id: 10,
        title: "Dairy",
        url: "/#",
      },
      {
        id: 11,
        title: "Pet",
        url: "/#",
      },
      {
        id: 12,
        title: "Rabbit",
        url: "/#",
      },
      {
        id: 13,
        title: "Lactation",
        url: "/#",
      },
      {
        id: 14,
        title: "Full truckloads",
        url: "/#",
      },
    ],
  },
  {
    title: "Commodities",
    url: "/#",
    children: [
      {
        id: 8,
        title: "About",
        url: "/#",
      },
      {
        id: 9,
        title: "Products",
        url: "/#",
      },
      {
        id: 10,
        title: "Team",
        url: "/#",
      },
    ],
  },
  {
    title: "Garden Center",
    url: "/#",
    children: [
      {
        id: 5,
        title: "Hours (currently closed for the season)",
        url: "/#",
      },
      {
        id: 6,
        title: "Fertilizer",
        url: "/#",
      },
      {
        id: 7,
        title: "Soil",
        url: "/#",
      },
    ],
  },
];

const logos = [
  {
    url: "zospace-assets/logos/harveys-tiller-white.svg",
  },
  {
    url: "zospace-assets/logos/harveys-script-white.svg",
  },
];

const logosDark = [
  {
    url: "zospace-assets/logos/harveys-tiller-green.svg",
  },
  {
    url: "zospace-assets/logos/harveys-script-green.svg",
  },
];

export default function IndexSectionHeaders1() {
  useEffect(() => {
    var promise = ref.current.play();

    if (promise !== undefined) {
      promise
        .then((_) => {
          // Autoplay started!
        })
        .catch((error) => {
          // Autoplay was prevented.
          // Show a "Play" button so that user can start playback.
          console.log(error);
        });
    }
  }, []);
  const [navOpen, setNavOpen] = React.useState(false);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [logoURL, setLogoURL] = React.useState(logos[0].url);
  const [logoURLDark, setLogoURLDark] = React.useState(logosDark[0].url);
  const ref = React.useRef(null);

  const linkTransformer = (menuItem) => {
    return (
      <a
        className="block pl-8 py-4 text-xl text-gray-800 hover:bg-blueGray-50 rounded-xl"
        href={menuItem.url}
      >
        {menuItem.title}
      </a>
    );
  };

  const handleClick = () => {
    const nextIsPlaying = !isPlaying;
    setIsPlaying(nextIsPlaying);

    if (nextIsPlaying) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  };

  return (
    <React.Fragment>
      <>
        <section className="relative bg-gray-800 overflow-hidden ">
          {" "}
          <div className="absolute inset-0">
            <video
              muted
              autoPlay
              loop
              playsInline
              poster="https://static.shuffle.dev/uploads/files/cc/cce6580999c8067e23bb4a662dea535a74b463e5/Screen-Shot-2024-09-12-at-12-19-20-PM.jpg"
              id="bgvid"
              ref={ref}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            >
              <source src="bg.webm" type="video/webm" />
              <source src="bg.mp4" type="video/mp4" />
            </video>
          </div>{" "}
          <nav className="relative border-b border-gray-500">
            {" "}
            <div className="flex items-center px-4 lg:px-8 bg-gray-900 bg-opacity-25">
              {" "}
              <div className="h-full py-8 pr-4 lg:pr-8 border-r border-white">
                {" "}
                <button
                  className="p-4"
                  onClick={() => setNavOpen((prevState) => !prevState)}
                >
                  {" "}
                  <svg
                    className="w-10 h-3 fill-white"
                    width={39}
                    height={13}
                    viewBox="0 0 39 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width={39} height={2} rx={1} fill="#FFFFFF" />
                    <rect
                      x={19}
                      y={11}
                      width={20}
                      height={2}
                      rx={1}
                      fill="#FFFFFF"
                    />
                  </svg>{" "}
                </button>{" "}
              </div>{" "}
              <div className="ml-8">
                {/* eslint-disable-next-line */}
                <a
                  className="text-2xl text-white font-bold"
                  href="#"
                  onClick={() =>
                    setLogoURL(
                      logos[logos.findIndex((logo) => logo.url !== logoURL)].url
                    )
                  }
                >
                  {" "}
                  <img
                    className="h-11"
                    src={logoURL}
                    alt="Harvey's"
                    width="auto"
                  />{" "}
                </a>{" "}
              </div>{" "}
            </div>
          </nav>{" "}
          <div className="relative container px-4 pt-24 md:pt-40 pb-32 mx-auto">
            {" "}
            <div className="absolute bottom-0 right-0 mb-12 2xl:mb-32 text-center w-full lg:w-auto">
              {/* eslint-disable-next-line */}
              <a
                className="text-lg text-white font-bold pb-2 border-b border-gray-500"
                href="#"
              >
                Carson City, MI
              </a>
            </div>{" "}
            <div className="flex flex-wrap items-center -mx-4 mb-12 md:mb-24">
              {" "}
              <div className="w-full lg:w-1/3 px-4 mb-20 lg:mb-0">
                {" "}
                <span className="text-lg lg:text-2xl font-bold text-white">
                  Welcome to Harvey's
                </span>{" "}
                <h2 className="mt-8 mb-12 lg:mb-16 text-6xl text-white font-bold font-heading md:text-7xl">
                  A family of agriculture-focused comapnies
                </h2>
                {/* eslint-disable-next-line */}
                <a
                  className="inline-block px-12 py-5 text-lg text-white font-bold rounded-full transition duration-200 bg-green-700 hover:bg-green-800"
                  href="#"
                >
                  Contact us
                </a>{" "}
              </div>{" "}
              <div className="hidden lg:block lg:w-2/3 px-4">
                {" "}
                <div className="flex justify-end">
                  {" "}
                  <button
                    className="inline-flex items-center justify-center w-28 h-28 text-white rounded-full border hover:border-gray-100 border-white"
                    onClick={handleClick}
                  >
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-play h-6 w-6"
                      viewBox="0 0 16 16"
                    >
                      <path d="M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z" />
                    </svg>
                  </button>{" "}
                  <p className="hidden lg:block transform rotate-90 text-white">
                    Press to play
                  </p>{" "}
                </div>{" "}
              </div>{" "}
              <div className="hidden lg:block w-full px-4 mt-16">
                {" "}
                <div className="relative max-w-sm mx-auto h-1 bg-black">
                  {" "}
                  <div className="absolute left-0 top-0 h-full w-1/2 bg-white" />{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <div
            className={`fixed top-0 left-0 bottom-0 w-5/6 max-w-sm z-50 ${
              navOpen ? `block` : `hidden`
            }`}
          >
            {" "}
            <div
              className="fixed inset-0 bg-gray-800 opacity-80"
              onClick={() => setNavOpen((prevState) => !prevState)}
            />{" "}
            <nav className="relative flex flex-col py-8 h-full w-full bg-white overflow-y-auto">
              {" "}
              <div className="flex items-center mb-16 pr-6">
                {/* eslint-disable-next-line */}
                <a
                  className="ml-10 mr-auto text-2xl text-gray-800 font-bold"
                  href="#"
                  onClick={() =>
                    setLogoURLDark(
                      logosDark[
                        logosDark.findIndex((logo) => logo.url !== logoURLDark)
                      ].url
                    )
                  }
                >
                  {" "}
                  <img
                    className="h-11"
                    src={logoURLDark}
                    alt="Harvey's"
                    width="auto"
                  />{" "}
                </a>{" "}
              </div>{" "}
              <div>
                {" "}
                <ReactNestedMenu
                  navParentClassname="nested"
                  navTopLevelParentClassname="vertical menu"
                  navChildClassname="ml-8"
                  linkTransformer={linkTransformer}
                  menuData={menu}
                />
              </div>{" "}
              <div className="mt-auto px-10">
                {" "}
                <p className="mt-6 mb-4 text-lg text-center">
                  {" "}
                  <span>2024 © Neucadia. All rights reserved.</span>{" "}
                </p>{" "}
              </div>{" "}
            </nav>
          </div>
        </section>
      </>
    </React.Fragment>
  );
}
