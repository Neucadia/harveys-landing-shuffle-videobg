import React from "react";
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
        url: "/equine",
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

const feed = [
  {
    id: 1,
    title: "Harvey's Horse 10%",
    protein: "10%",
    weight: "50 lbs",
    slug: "/harveys-horse-10",
  },
  {
    id: 2,
    title: "Buckeye - Supreme 14",
    protein: "14%",
    weight: "40 lbs",
    slug: "#",
  },
  {
    id: 3,
    title: "Buckeye - Safe 'N Easy Senior Pelleted",
    protein: "14%",
    weight: "40 lbs",
    slug: "#",
  },
  {
    id: 4,
    title: "Buckeye - Safe 'N Easy Complete",
    protein: "12%",
    weight: "50 lbs",
    slug: "#",
  },
  {
    id: 5,
    title: "Buckeye - Ultimate Finish 25",
    protein: "12%",
    weight: "40 lbs",
    slug: "#",
  },
  {
    id: 6,
    title: "Buckeye - Gro 'N Win",
    protein: "32%",
    weight: "50 lbs",
    slug: "#",
  },
  {
    id: 7,
    title: "Buckeye - EQ8 Gut Health",
    protein: "12%",
    weight: "50 lbs",
    slug: "#",
  },
  {
    id: 8,
    title: "Buckeye - Apple Snap Treats",
    protein: "12%",
    weight: "4 lbs",
    slug: "#",
  },
  {
    id: 9,
    title: "Buckeye - Carrot Crunchers Treats",
    protein: "12%",
    weight: "4 lbs",
    slug: "#",
  },
  {
    id: 10,
    title: "Buckeye - Peppermint Bits Treats",
    protein: "12%",
    weight: "4 lbs",
    slug: "#",
  },
];

export default function EquineList() {
  const [navOpen, setNavOpen] = React.useState(false);
  const [logoURL, setLogoURL] = React.useState(logos[0].url);
  const [logoURLDark, setLogoURLDark] = React.useState(logosDark[0].url);

  const linkTransformer = (menuItem) => {
    return (
      <a
        className="block pl-8 py-4 text-xl text-gray-800 hover:bg-green-50 rounded-xl"
        href={menuItem.url}
      >
        {menuItem.title}
      </a>
    );
  };

  return (
    <React.Fragment>
      <>
        <section className="relative bg-green-800 overflow-hidden ">
          <nav className="relative border-b border-green-900">
            {" "}
            <div className="flex items-center px-4 lg:px-8 bg-gray-900 bg-opacity-25">
              {" "}
              <div className="h-full py-8 pr-4 lg:pr-8 border-r border-green">
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
        <section className="relative pb-20 2xl:py-40 bg-white overflow-hidden">
          <img
            className="hidden lg:block absolute z-10 top-0 left-0 w-2/6 h-full object-cover"
            src="https://images.unsplash.com/photo-1514861889637-9f51bc99fc19?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMzIzMzB8MHwxfHNlYXJjaHw2NHx8aG9yc2UlMjBmZWVkfGVufDB8fHx8MTcyODMyOTA5Nnww&ixlib=rb-4.0.3&q=85&w=1920"
            alt="Equine feed"
          />
          <div className="relative w-full lg:w-4/6 ml-auto pl-4 lg:pl-24 pr-4 pt-20">
            <div className="mb-20">
              <span className="tiller-demi text-lg font-bold text-green-700">
                Harvey's Feed
              </span>
              <h2 className="tiller-bold mt-8 text-7xl font-bold font-heading">
                Equine
              </h2>
            </div>
            <div className="max-w-4xl">
              <ul>
                {feed.map((item) => (
                  <li className="mb-4 px-4 lg:px-12 py-8 border-b border-gray-50">
                    {/* eslint-disable-next-line */}
                    <a className="flex w-full text-left" href={item.slug}>
                      <div className="w-auto mr-8">
                        <span className="tiller-bold flex items-center justify-center w-12 h-12 bg-green-100 text-lg font-bold rounded-full">
                          {item.protein}
                        </span>
                      </div>
                      <div className="w-full mt-3">
                        <div className="flex items-center justify-between">
                          <h3 className="tiller-demi text-xl font-bold">
                            {item.title}
                          </h3>
                          <span className="ml-4">
                            <span className="inline-block transform">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={16}
                                height={16}
                                fill="currentColor"
                                className="w-4 h-4"
                                viewBox="0 0 16 16"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                                />
                              </svg>
                            </span>
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </>
    </React.Fragment>
  );
}
