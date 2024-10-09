import React from "react";
import { ReactNestedMenu } from "react-nested-menu";
import Analysis from "./analysis.json";

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

export default function ProductPage() {
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
        <section className="pt-20 2xl:pt-40 pb-40 2xl:pb-80 overflow-hidden">
          <div className="container px-4 mx-auto">
            <div className="max-w-xl mx-auto mb-16 lg:mb-28 text-center">
              <span className="tiller-medium text-lg font-bold text-green-800">
                Harvey's Feed
              </span>
              <h2 className="tiller-bold mt-6 mb-12 text-6xl font-bold font-heading">
                Harvey's Horse 10
              </h2>
              <p className="tiller-italic text-lg text-gray-500">
                Complete feed for all life stages
              </p>
              <p className="mt-6 mb-6 text-gray-400">
                <ul className="text-left">
                  <li className="mb-2 list-disc">
                    Includes a tailored blend of prebiotics and probiotics to
                    support overall gut health
                  </li>
                  <li className="mb-2 list-disc">
                    Essential omega-3 and -6 fatty acids to support performance
                    and overall health
                  </li>
                  <li className="mb-2 list-disc">
                    Fortified with GRO 'N WIN™ for balanced nutrition
                  </li>
                </ul>
              </p>
            </div>
            <div className="flex flex-wrap items-center -mx-10 -mt-10">
              <div className="relative w-full lg:w-1/2 px-10 mb-16 lg:mb-0">
                <div className="relative lg:max-w-md lg:ml-auto z-10">
                  <img
                    className="object-cover w-full lg:w-112 h-160"
                    src="/zospace-assets/images/product.png"
                    alt="Harvey's Horse 10"
                  />
                  <div className="absolute bottom-0 left-0 w-full px-12"></div>
                </div>
                <img
                  className="hidden lg:block absolute top-0 right-0 mt-52 xl:mt-0 -mr-40 xl:mr-0 hue-rotate-205"
                  src="zospace-assets/images/blue-eclipse.png"
                  alt="Blue Eclipse"
                />
              </div>
              <div className="w-full lg:w-1/2 px-10">
                <div className="max-w-lg">
                  <ul>
                    <li className="flex items-center pb-10 mb-8 border-b border-gray-50">
                      <div className="mr-8">
                        <span className="flex justify-center items-center w-14 h-14 bg-green-50 text-lg font-bold rounded-full">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            version="1.1"
                            viewBox="0 0 24 24"
                            width={24}
                            height={24}
                            fill="#10b981"
                          >
                            <g>
                              <g id="Layer_1">
                                <path
                                  class="cls-1"
                                  d="M5,22.1c-.4-4.4,4.4-10.4,4.5-11.5,0,0,0,0-.1,0-.5,0-2.1,1.7-3.9,1.1-1.2-.4-1.9-1.7-2-2.8,0-1,.4-1.9,1.2-2.2,1-.5,1.3-1.2,1.6-2,.2-.5.7-2.2,2.7-2.2s.6,0,.8,0C9.9,1.8,9.5.5,8.9,0c8.3,0,11.2,6,11.2,9.7s-2.7,10.2-1.4,12.4c.9,0,2.3,0,2.3.8,0,1.4-.7,1.2-2.5,1.2H5.5c-1.5,0-2.5,0-2.5-1s.5-.9,2-.9ZM17.9,8c-.6-2.2-2.4-4.7-6-5.7.3,1.3-.5,2.3-2.4,2-1-.2-1,0-1.4.9-.4.9-.9,2.3-2.6,3.1-.2.2.1,1.2.5,1.3.9.3,1.9-1.2,3.3-1.2s2.1,1.1,2.1,2c0,1.1-.9,2.1-2,3.2-1.4,1.4-2.7,6.2-2.5,8.3h9.5c-.3-.9-.2-5.2.4-7h-1.2c-.2,0-.5-.2-.5-.5s.3-.5.5-.5h1.5c.1-.3.2-.7.3-1h-1.3c-.3,0-.5-.3-.5-.5s.2-.5.5-.5h1.5c0-.3.1-.6.2-1h-1.3c-.2,0-.5-.2-.5-.5s.3-.5.5-.5h1.4c0-.4,0-.6,0-1h-1.5c-.2,0-.5-.2-.5-.5s.3-.5.5-.5c0,0,1.3,0,1.3,0ZM9.9,5.3c.5,0,.9.4.9.8s-.4.8-.9.8-.9-.4-.9-.8.4-.8.9-.8Z"
                                />
                              </g>
                            </g>
                          </svg>
                        </span>
                      </div>
                      <div className="max-w-xs">
                        <h3 className="tiller-bold text-lg font-bold font-heading text-gray-400">
                          Equine-specific formula
                        </h3>
                      </div>
                    </li>
                    <li className="flex items-center pb-10 mb-8 border-b border-gray-50">
                      <div className="mr-8">
                        <span className="flex justify-center items-center w-14 h-14 bg-green-50 text-lg font-bold rounded-full">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="#10b981"
                          >
                            <path d="M15.787 7.531c-5.107 2.785-12.72 9.177-15.787 15.469h2.939c.819-2.021 2.522-4.536 3.851-5.902 8.386 3.747 17.21-2.775 17.21-11.343 0-1.535-.302-3.136-.92-4.755-2.347 3.119-5.647 1.052-10.851 1.625-7.657.844-11.162 6.797-8.764 11.54 3.506-3.415 9.523-6.38 12.322-6.634z" />
                          </svg>
                        </span>
                      </div>
                      <div className="max-w-xs">
                        <h3 className="tiller-bold text-lg font-bold font-heading text-gray-400">
                          100% traceable, pure ingredients
                        </h3>
                      </div>
                    </li>
                    <li className="flex items-center pb-10 border-b border-gray-50">
                      <div className="mr-8">
                        <span className="flex justify-center items-center w-14 h-14 bg-green-50 text-lg font-bold rounded-full">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            version="1.1"
                            viewBox="0 0 24 24"
                            width="24"
                            height="24"
                            fill="#10b981"
                          >
                            <g>
                              <g id="Layer_1">
                                <path
                                  class="cls-1"
                                  d="M9.7,19.9l-.4.6c-1.4,2.4-4.4,3.2-6.8,1.8C.1,21-.7,17.9.7,15.5L7.5,3.5c.9-1.6,2.6-2.5,4.4-2.5.8,0,1.7.2,2.5.7,1.8,1.1,2.8,3.1,2.4,5.1,0,.4-.2.9-.4,1.3-1,.1-1.9.4-2.8.8l.8-1.4c.8-1.4.3-3.3-1.1-4.1s-3.3-.3-4.1,1.1l-3.4,5.9,4,2.3c-.6,1.1-.9,2.4-.9,3.8s.2,2.3.7,3.4Z"
                                />
                                <path d="M17.5,10c-3.6,0-6.5,2.9-6.5,6.5s2.9,6.5,6.5,6.5,6.5-2.9,6.5-6.5-2.9-6.5-6.5-6.5ZM22.4,16.5c0,1.1-.3,2-.9,2.8l-6.8-6.8c.8-.6,1.8-.9,2.8-.9,2.7,0,4.9,2.2,4.9,4.9ZM12.6,16.5c0-1.1.3-2,.9-2.8l6.8,6.8c-.8.6-1.8.9-2.8.9-2.7,0-4.9-2.2-4.9-4.9Z" />
                              </g>
                            </g>
                          </svg>
                        </span>
                      </div>
                      <div className="max-w-xs">
                        <h3 className="tiller-bold text-lg font-bold font-heading text-gray-400">
                          100% med-free facility
                        </h3>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="px-10 mx-auto mt-12">
              <h6 className="tiller-bold mt-6 mb-2 text-base leading-tight font-bold font-heading text-gray-500">
                Ingredients
              </h6>
              <p className="mb-6 text-base text-gray-400 text-left">
                Wheat Middlings, Ground Corn, Soybean Meal, Soybean Hulls,
                Calcium Carbonate, Soybean Oil, Dehydrated Alfalfa Meal, Calcium
                Phosphate, Active Dried Yeast Culture, Salt, L-Lysine, Vitamin E
                Supplement, Manganese Sulfate, Zinc Sulfate, Zinc Proteinate,
                Manganese Proteinate, Copper Sulfate, Ferrous Sulfate, Choline
                Chloride, Copper Proteinate, Sodium Selenite, Selenium Yeast,
                Thiamine Mononitrate, Vitamin D3 Supplement, Vitamin A
                Supplement, Riboflavin, Ascorbyl-2-Polyphosphate.
              </p>
            </div>
          </div>
          {/* Analysis */}
          <section className="relative py-20 2xl:py-40">
            <div className="container px-4 pb-20 mx-auto border-b border-gray-100">
              <div className="mb-14 text-center">
                <span className="tiller-medium text-lg text-green-800 font-bold">
                  Equine Feed
                </span>
                <h2 className="tiller-demi mt-8 text-5xl font-bold font-heading">
                  Guaranteed Analysis
                </h2>
              </div>
              <div className="pt-20 border-t border-gray-100 overflow-x-auto overflow-y-hidden">
                <table className="table-auto w-full mb-10">
                  <thead>
                    <tr className="text-lg text-left font-bold"></tr>
                  </thead>
                  <tbody>
                    {Analysis.map((item, index) => (
                      <tr
                        className={`${
                          index % 2 === 0 ? `bg-gray-50` : `bg-white`
                        }`}
                      >
                        <td className="py-5 pl-10 text-left">
                          {item.name} {item.qualifier && `(${item.qualifier})`}
                        </td>
                        <td>
                          {item.value}
                          {item.unit}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </section>
      </>
    </React.Fragment>
  );
}
