import React, { useEffect } from "react";

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
  const ref = React.useRef(null);

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
                {" "}
                <a className="text-2xl text-white font-bold" href="#">
                  {" "}
                  <img
                    className="h-11"
                    src="https://static.shuffle.dev/uploads/files/cc/cce6580999c8067e23bb4a662dea535a74b463e5/logo.png"
                    alt
                    width="auto"
                  />{" "}
                </a>{" "}
              </div>{" "}
            </div>
          </nav>{" "}
          <div className="relative container px-4 pt-24 md:pt-40 pb-32 mx-auto">
            {" "}
            <div className="absolute bottom-0 right-0 mb-12 2xl:mb-32 text-center w-full lg:w-auto">
              <a
                className="text-lg text-white font-bold pb-2 border-b border-gray-500"
                href="#"
              >
                Campaing summer collection.
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
                </h2>{" "}
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
                {" "}
                <a
                  className="ml-10 mr-auto text-2xl text-gray-800 font-bold"
                  href="#"
                >
                  {" "}
                  <img
                    className="h-11"
                    src="https://static.shuffle.dev/uploads/files/cc/cce6580999c8067e23bb4a662dea535a74b463e5/script-green.png"
                    alt
                    width="auto"
                  />{" "}
                </a>{" "}
              </div>{" "}
              <div>
                {" "}
                <ul>
                  {" "}
                  <li className="mb-1 px-10">
                    <a
                      className="block pl-8 py-4 text-xl text-gray-800 hover:bg-blueGray-50 rounded-xl"
                      href="#"
                    >
                      Store
                    </a>
                  </li>{" "}
                  <li className="mb-1 px-10">
                    <a
                      className="block pl-8 py-4 text-xl text-gray-800 hover:bg-blueGray-50 rounded-xl"
                      href="#"
                    >
                      Commodities
                    </a>
                  </li>{" "}
                  <li className="mb-1 px-10">
                    <a
                      className="block pl-8 py-4 text-xl text-gray-800 hover:bg-blueGray-50 rounded-xl"
                      href="#"
                    >
                      Feed
                    </a>
                  </li>{" "}
                  <li className="mb-1 px-10">
                    <a
                      className="block pl-8 py-4 text-xl text-gray-800 hover:bg-blueGray-50 rounded-xl"
                      href="#"
                    >
                      Seed
                    </a>
                  </li>{" "}
                  <li className="mb-1 px-10">
                    <a
                      className="block pl-8 py-4 text-xl text-gray-800 hover:bg-blueGray-50 rounded-xl"
                      href="#"
                    >
                      Garden Center
                    </a>
                  </li>{" "}
                </ul>{" "}
              </div>{" "}
              <div className="mt-auto px-10">
                {" "}
                <p className="mt-6 mb-4 text-lg text-center">
                  {" "}
                  <span>2021 © Zospace. All rights reserved.</span>{" "}
                </p>{" "}
              </div>{" "}
            </nav>
          </div>
        </section>
      </>
    </React.Fragment>
  );
}
