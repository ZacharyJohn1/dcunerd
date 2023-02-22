export default function Home() {
  return (
    <main className="px-2 py-4">
      <div className="mb-2 lg:flex flex-row mb-2">
        <div className="flex px-4 place-content-center">
          <h2 className="flex rounded-lg md:rounded-none font-semibold items-center justify-center text-center text-3xl bg-blue-400 mb-4 h-[40px] md:h-full w-full dark:text-black">
            Latest News:
          </h2>
        </div>
        <div className="mb-4 h-1 bg-black dark:bg-white"></div>

        <div className="rounded-xl mx-5 mb-5 shadow-lg bg-blue-400 text-gray-700 text-center dark:bg-blue-700 text-black">
          <div className="flex rounded-xl flex-col text-center items-center">
            <div className="mb-1 rounded-xl shadow-lg bg-white text-black">
              <a href="#!">
                <img
                  className="object-cover rounded-t-xl lg:w-max"
                  src="https://www.digitaltrends.com/wp-content/uploads/2022/05/dc-comics-nightwing.jpg?p=1"
                  alt="Nightwing gives a smug look as he falls through the air"
                />
              </a>
              <div className="flex bg-white items-center justify-center">
                <a href="#!">
                  <h2 className="text-2xl">
                    James Gunn Teases 5 New Heroes for the DCU
                  </h2>
                </a>
              </div>
            </div>
            <p className="p-2 m-2 rounded-xl text-xs text-black bg-blue-200">
              While there has been much speculation about which heroes will be
              featured in the DCU...{" "}
              <a className="text-blue-500" href="#">
                Continue Reading
              </a>
            </p>
          </div>
        </div>
        <div className="rounded-xl mx-5 mb-5 shadow-lg bg-blue-400 text-gray-700 text-center dark:bg-blue-700 text-black">
          <div className="flex rounded-xl flex-col text-center items-center">
            <div className="mb-1 rounded-xl shadow-lg bg-white text-black">
              <a href="#!">
                <img
                  className="object-cover rounded-t-xl"
                  src="keats.png"
                  alt="Robin and Jon look at the camera"
                />
              </a>
              <div className="flex bg-white items-center justify-center">
                <a href="#!">
                  <h2 className="text-2xl">New Trailer for 'The Flash'</h2>
                </a>
              </div>
            </div>
            <p className="p-2 m-2 rounded-xl text-xs text-black bg-blue-200">
              Keaton makes his much awaited return and
              Calle stuns as Supergirl in 'The Flash' trailer...{" "}
              <a className="text-blue-500" href="#">
                Continue Reading
              </a>
            </p>
          </div>
        </div>
        <div className="flex place-content-center">
          <button
            type="button"
            className="flex mb-4 rounded-3xl self-center px-6 py-2.5 bg-blue-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:text-gray-200 hover:bg-blue-500 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out dark:bg-gray-300 text-black"
          >
            <a href="/news">See More News ➡️</a>
          </button>
        </div>
      </div>
      <div className="mb-4 h-1 bg-black dark:bg-white"></div>
      <div className="mb-2">
        <div className="flex px-4 place-content-center">
          <h2 className="flex rounded-lg font-semibold items-center justify-center text-center text-3xl bg-blue-400 mb-4 h-[40px] w-full dark:text-black">
            Latest Reviews:
          </h2>
        </div>
        <div className="mb-4 h-1 bg-black dark:bg-white"></div>

        <div className="rounded-xl mx-5 mb-5 shadow-lg bg-blue-400 text-gray-700 text-center dark:bg-blue-700 text-black">
          <div className="flex rounded-xl flex-col text-center items-center">
            <div className="mb-1 rounded-xl shadow-lg bg-white text-black">
              <a href="#!">
                <img
                  className="object-cover rounded-t-xl"
                  src="https://m.media-amazon.com/images/M/MV5BZjU0MjBmZTgtYzE2Mi00NTdmLWE4M2QtM2Y0Y2JjMTQ0NTkwXkEyXkFqcGdeQXVyOTc5MDI5NjE@._V1_.jpg"
                  alt="Two caped heroes walk down a hall"
                />
              </a>
              <div className="flex bg-white items-center justify-center">
                <a href="#!">
                  <h2 className="text-2xl">'Legion of Super Heroes' ★☆☆☆☆</h2>
                </a>
              </div>
            </div>
            <p className="p-2 m-2 rounded-xl text-xs text-black bg-blue-200">
              Legion of Superheroes tries to tell the story of a broken woman
              but falls flat where it counts...{" "}
              <a className="text-blue-500" href="#">
                Continue Reading
              </a>
            </p>
          </div>
        </div>
        <div className="rounded-xl mx-5 mb-5 shadow-lg bg-blue-400 text-gray-700 text-center dark:bg-blue-700 text-black">
          <div className="flex rounded-xl flex-col text-center items-center">
            <div className="mb-1 rounded-xl shadow-lg bg-white text-black">
              <a href="#!">
                <img
                  className="object-cover rounded-t-xl"
                  src="https://www.dc.com/sites/default/files/Marquee_SuperSons_63604ef9250065.21638518.jpg"
                  alt="Robin and Jon look at the camera"
                />
              </a>
              <div className="flex bg-white items-center justify-center">
                <a href="#!">
                  <h2 className="text-2xl">
                    'Batman and Superman: Battle of the Super Sons' <br></br>
                    ★★★☆☆
                  </h2>
                </a>
              </div>
            </div>
            <p className="p-2 m-2 rounded-xl text-xs text-black bg-blue-200">
              Battle of The Super Sons starts slow but builds into a fun and
              heartfelt ride between two...{" "}
              <a className="text-blue-500" href="#">
                Continue Reading
              </a>
            </p>
          </div>
        </div>

        <div className="flex place-content-center">
          <button
            type="button"
            className="flex mb-4 rounded-3xl self-center px-6 py-2.5 bg-blue-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:text-gray-200 hover:bg-blue-500 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out dark:bg-gray-300 text-black"
          >
            <a href="/reviews">See More Reviews ➡️</a>
          </button>
        </div>
      </div>

      <div className="mb-4 h-1 bg-black dark:bg-white"></div>
      <div className="p-3 mb-3 shadow-lg rounded-lg bg-blue-400 text-gray-700 text-center dark:bg-blue-700 text-black">
        <h2 className="font-semibold text-xl rounded-lg bg-blue-200 text-black dark:bg-black dark:text-white">
          The Future of the DCU:
        </h2>
        <div className="flex flex-col text-center items-center p-2">
          <div className="mb-1 rounded-lg shadow-lg bg-white dark:bg-black dark:text-white">
            <a href="#!">
              <img
                className="object-cover"
                src="fullSlate.JPG"
                alt="A large list of upcoming DC movies"
              />
            </a>
            <p className="text-xs text-black bg-blue-200">
              credit: heroes reforged | view the full picture{" "}
              <a
                href="https://www.instagram.com/p/CoGl0btrbaI/?hl=en"
                className="text-cyan-500 dark:text-black underline"
              >
                here
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="mb-4 h-1 bg-black dark:bg-white"></div>

    </main>
  );
}
