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
        <section className="relative py-20 2xl:py-40 overflow-hidden bg-yellow-50">
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
                  <div className="p-16 bg-green-900 rounded-lg">
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
                        className="mb-2 border-b border-gray-100"
                        src={`/zospace-assets/logos/harveys-${activeLogo.name}-store.png`}
                        alt="Harvey's Store"
                      />
                      <p className="text-lg text-gray-100">
                        Workwear, footwear, premium lifestyle clothing, pet and
                        birdfeeder supplies, &amp; much more.
                      </p>
                    </a>
                  </div>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/3 p-6">
                  <div className="p-16 bg-green-900 rounded-lg">
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
                        className="mb-2 border-b border-gray-100"
                        src={`/zospace-assets/logos/harveys-${activeLogo.name}-commodities.png`}
                        alt="Harvey's Commodities"
                      />
                      <p className="text-lg text-gray-100">
                        Livestock feed merchandising, freight brokerage,
                        end-to-end logistics.
                      </p>
                    </a>
                  </div>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/3 p-6">
                  <div className="p-16 bg-green-900 rounded-lg">
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
                        className="mb-2 border-b border-gray-100"
                        src={`/zospace-assets/logos/harveys-${activeLogo.name}-feed.png`}
                        alt="Harvey's Feed"
                      />
                      <p className="text-lg text-gray-100">
                        Calf, cattle, dairy, equine, goat, poultry, rabbit,
                        swine custom mixes and stock mixes.
                      </p>
                    </a>
                  </div>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/3 p-6">
                  <div className="p-16 bg-green-900 rounded-lg">
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
                        className="mb-2 border-b border-gray-100"
                        src={`/zospace-assets/logos/harveys-${activeLogo.name}-gc.png`}
                        alt="Harvey's Garden Center"
                      />
                      <p className="text-lg text-gray-100">
                        Seasonal fertilizer, soil, annuals, perennials, shrubs,
                        trees, and much more.
                      </p>
                    </a>
                  </div>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/3 p-6">
                  <div className="p-16 bg-green-900 rounded-lg">
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
                        className="mb-2 border-b border-gray-100"
                        src={`/zospace-assets/logos/harveys-${activeLogo.name}-seed.png`}
                        alt="Harvey's Seed"
                      />
                      <p className="text-lg text-gray-100">
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
        <section className="relative pt-40 pb-32 px-8 md:px-24 bg-white">
          <div className="flex flex-wrap -m-4 mb-16">
            <div className="w-full lg:w-1/3 p-4">
              <img
                className="rounded-2xl object-cover w-full"
                style={{ height: 335 }}
                src="zospace-assets/images/picture11.png"
                alt="Bridget and Kerry"
              />
            </div>
            <div className="w-full lg:w-2/3 p-4">
              <img
                className="rounded-2xl object-cover w-full"
                style={{ height: 422 }}
                src="zospace-assets/images/picture12.png"
                alt="Bridget and Harvey"
              />
            </div>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="w-full lg:w-1/3 p-4">
              <p className="tiller-italic tracking-tight mb-4">
                Serving Mid-Michigan’s farming and feed needs for over 79 years
              </p>
              <h1 className="tiller-medium tracking-tight font-heading text-4xl md:text-6xl font-medium">
                Our story
              </h1>
            </div>
            <div className="w-full lg:w-2/3 p-4">
              <div className="flex flex-wrap -m-4">
                <div className="w-full lg:w-1/2 p-4">
                  <div className="pt-6 border-t border-black">
                    <p className="text-lg">
                      The ‘Mill’, as they call it here, is Carson City's oldest
                      building, That's no small feat in a town where things just
                      seem to last. Starting as a sawmill in 1866 before
                      transitioning to a gristmill and finally an automated,
                    </p>
                  </div>
                </div>
                <div className="w-full lg:w-1/2 p-4">
                  <div className="pt-6 lg:border-t lg:border-black">
                    <p className="text-lg">
                      complex livestock feed system during World War II, the
                      Mill stands as a testament to Harvey’s proud tradition of
                      reinvention, resilience, and service to the community.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="overflow-x-scroll overflow-y-hidden relative px-8 md:px-24 bg-white">
          <div className="flex flex-wrap -m-4">
            <div className="w-full lg:w-1/3 p-4">
              <div className="flex flex-col justify-end items-start h-full py-12">
                <h1 className="tiller-demi tracking-tight font-heading font-semibold text-4xl mb-4">
                  Our history
                </h1>
                <p className="tiller-regular tracking-tight text-gray-700 mb-6 max-w-md">
                  Community-inspired, family-owned, family-run small business.
                </p>
                {/* eslint-disable-next-line */}
                <a
                  href="#"
                  className="bg-black h-14 rounded-full px-5 py-3 inline-flex items-center justify-center gap-2 tracking-tight hover:bg-orange-600 focus:bg-orange-500 focus:ring-4 focus:ring-orange-200 transition duration-200"
                >
                  <span className="text-white text-sm font-semibold tracking-tight">
                    Explore Our Store
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M14 6.66669H7.33333C4.38781 6.66669 2 9.0545 2 12V13.3334M14 6.66669L10 10.6667M14 6.66669L10 2.66669"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className="w-full lg:w-2/3 p-4">
              <div className="relative" style={{ height: 700 }}>
                <div className="absolute left-0 top-0 h-full">
                  <div className="flex h-full">
                    <div className="w-128 border-l border-r border-gray-200 p-12">
                      <div className="flex flex-col justify-between h-full">
                        <div className="flex items-center justify-between">
                          <p className="tiller-demi tracking-tight font-semibold">
                            1900s
                          </p>
                          {/* eslint-disable-next-line */}
                          <a
                            href="#"
                            className="text-gray-900 hover:text-gray-800 transition duration-200"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={16}
                              height={16}
                              viewBox="0 0 16 16"
                              fill="none"
                            >
                              <path
                                d="M14 6.66699H7.33333C4.38781 6.66699 2 9.05481 2 12.0003V13.3337M14 6.66699L10 10.667M14 6.66699L10 2.66699"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </a>
                        </div>
                        <div>
                          <img
                            className="rounded-xl object-cover mx-auto mb-11"
                            style={{ height: 320 }}
                            src="zospace-assets/images/picture8.png"
                            alt="Lyons and Daniels Mill"
                          />
                          <h2 className="tiller-medium font-heading tracking-tight text-2xl font-semibold mb-4">
                            1900s: Lyons and Daniels purchase mill
                          </h2>
                          <p className="tracking-tight text-gray-700">
                            The pair expanded the flour business and came up
                            with the slogan, ‘The dawn of a better bread.’
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="w-128 border-r border-gray-200 p-12 bg-gray-50">
                      <div className="flex flex-col justify-between h-full">
                        <p className="tiller-demi tracking-tight font-semibold">
                          1945
                        </p>
                        <div>
                          <img
                            className="rounded-xl object-cover mx-auto mb-11"
                            style={{ height: 320 }}
                            src="zospace-assets/images/picture2.png"
                            alt="Waldron Mill"
                          />
                          <h2 className="tiller-medium font-heading tracking-tight text-2xl font-semibold mb-4">
                            1945: Harvey and Gladys Waldron buy mill
                          </h2>
                          <p className="tracking-tight text-gray-700">
                            The Waldrons converted most of the flour gear into
                            livestock feed-making equipment and added an
                            equipment dealership.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="w-128 border-r border-gray-200 p-12 bg-gray-50">
                      <div className="flex flex-col justify-between h-full">
                        <p className="tiller-demi tracking-tight font-semibold">
                          1950
                        </p>
                        <div>
                          <img
                            className="rounded-xl object-cover mx-auto mb-11"
                            style={{ height: 320 }}
                            src="zospace-assets/images/picture3.png"
                            alt="The Haradine Mill"
                          />
                          <h2 className="tiller-medium font-heading tracking-tight text-2xl font-semibold mb-4">
                            1950: The Haradine Family become owners
                          </h2>
                          <p className="tracking-tight text-gray-700">
                            Continuing in the history of innovation, the
                            Haradines remodeled the mill, adding a new wing and
                            discontinuing the water power. A garden center was
                            also added to the business, selling trees, shrubs,
                            bulbs, and bulk seeds.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="relative bg-white py-24 px-8 md:px-24">
          <div className="flex flex-wrap -m-4">
            <div className="w-full lg:w-1/2 p-4">
              <p className="tiller-bold mb-4 tracking-tight font-bold">2000s</p>
              <h3 className="tiller-medium text-4xl md:text-6xl font-medium tracking-tight mb-16 max-w-xs md:max-w-lg">
                Harvey's exceptional Team enters the 21st Century
              </h3>
              <img
                className="rounded-2xl lg:ml-auto object-cover"
                style={{ height: 419 }}
                src="https://static.shuffle.dev/uploads/files/70/705770af5df1978202fa665db13807b68dda6f51/F7A7998.jpg"
                alt="Tyler"
              />
            </div>
            <div className="w-full lg:w-1/2 p-4">
              <img
                className="rounded-2xl mb-20 object-cover object-left"
                style={{ height: 516 }}
                src="https://static.shuffle.dev/uploads/files/70/705770af5df1978202fa665db13807b68dda6f51/5.jpg"
                alt="The Mill"
              />
              <p className="tracking-tight text-lg max-w-lg">
                Those traveling M-57 the past few decades might not have noticed
                much change, but the Mill stands as a firm testament to Harvey's
                proud tradition of reinvention, resilience, and reverence for
                the community.
              </p>
            </div>
          </div>
        </section>
      </>
    </React.Fragment>
  );
}
