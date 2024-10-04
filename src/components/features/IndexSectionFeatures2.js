import React from "react";

const logos = [
  {
    name: "tiller",
  },
  {
    name: "script",
  },
];

export default function IndexSectionFeatures2() {
  const [activeLogo, setActiveLogo] = React.useState(logos[0]);

  return (
    <React.Fragment>
      <>
        <section className="relative py-20 2xl:py-40 overflow-hidden bg-green-900">
          <img
            className="hidden lg:block absolute top-0 left-0 -ml-96 -mt-40"
            src="zospace-assets/lines/circle.svg"
            alt="Circle"
          />
          <img
            className="hidden lg:block absolute bottom-0 right-0 -mr-32 -mb-72"
            src="zospace-assets/lines/circle.svg"
            alt="Circle"
          />
          <div className="relative container px-4 mx-auto">
            <div>
              <div className="flex flex-wrap -m-6">
                <div className="w-full md:w-1/2 lg:w-1/3 p-6">
                  <div className="p-16 bg-gray-600 rounded-lg">
                    {/* eslint-disable-next-line */}
                    <a
                      onClick={() =>
                        setActiveLogo(
                          logos[
                            logos.findIndex(
                              (logo) => logo.name !== activeLogo.name
                            )
                          ]
                        )
                      }
                    >
                      <img
                        src={`/zospace-assets/logos/harveys-${activeLogo.name}-store.png`}
                        alt="Harvey's Store"
                      />
                      <p className="text-lg text-gray-200">
                        Workwear, footwear, premium lifestyle clothing, pet and
                        birdfeeder supplies, &amp; much more.
                      </p>
                    </a>
                  </div>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/3 p-6">
                  <div className="p-16 bg-gray-600 rounded-lg">
                    {/* eslint-disable-next-line */}
                    <a
                      onClick={() =>
                        setActiveLogo(
                          logos[
                            logos.findIndex(
                              (logo) => logo.name !== activeLogo.name
                            )
                          ]
                        )
                      }
                    >
                      <img
                        src={`/zospace-assets/logos/harveys-${activeLogo.name}-commodities.png`}
                        alt="Harvey's Commodities"
                      />
                      <p className="text-lg text-gray-200">
                        Livestock feed merchandising, freight brokerage,
                        end-to-end logistics.
                      </p>
                    </a>
                  </div>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/3 p-6">
                  <div className="p-16 bg-gray-600 rounded-lg">
                    {/* eslint-disable-next-line */}
                    <a
                      onClick={() =>
                        setActiveLogo(
                          logos[
                            logos.findIndex(
                              (logo) => logo.name !== activeLogo.name
                            )
                          ]
                        )
                      }
                    >
                      <img
                        src={`/zospace-assets/logos/harveys-${activeLogo.name}-feed.png`}
                        alt="Harvey's Feed"
                      />
                      <p className="text-lg text-gray-200">
                        Calf, cattle, dairy, equine, goat, poultry, rabbit,
                        swine custom mixes and stock mixes.
                      </p>
                    </a>
                  </div>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/3 p-6">
                  <div className="p-16 bg-gray-600 rounded-lg">
                    {/* eslint-disable-next-line */}
                    <a
                      onClick={() =>
                        setActiveLogo(
                          logos[
                            logos.findIndex(
                              (logo) => logo.name !== activeLogo.name
                            )
                          ]
                        )
                      }
                    >
                      <img
                        src={`/zospace-assets/logos/harveys-${activeLogo.name}-gc.png`}
                        alt="Harvey's Garden Center"
                      />
                      <p className="text-lg text-gray-200">
                        Seasonal fertilizer, soil, annuals, perennials, shrubs,
                        trees, and much more.
                      </p>
                    </a>
                  </div>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/3 p-6">
                  <div className="p-16 bg-gray-600 rounded-lg">
                    {/* eslint-disable-next-line */}
                    <a
                      onClick={() =>
                        setActiveLogo(
                          logos[
                            logos.findIndex(
                              (logo) => logo.name !== activeLogo.name
                            )
                          ]
                        )
                      }
                    >
                      <img
                        src={`/zospace-assets/logos/harveys-${activeLogo.name}-seed.png`}
                        alt="Harvey's Seed"
                      />
                      <p className="text-lg text-gray-200">
                        Alfalfa, corn, soybeans, silage, wheat, and a full
                        catalogue of cover cropping and food plot solutions.
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    </React.Fragment>
  );
}
