export default function Home() {
  return (
    <main className="px-2 py-4">
      <div className="border-0 border-blue-700">
      <div className="flex place-content-center">
        <h2 className="flex font-semibold items-center justify-center text-center text-3xl bg-blue-700 text-black mb-4 h-[65px] w-full">
          Latest News:
        </h2>
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
              <h2 className="text-2xl">New Trailer for 'The Flash'</h2>
            </div>
          </div>
          <p className="p-2 m-2 rounded-xl text-xs text-black bg-blue-200">
            Michael Keaton is making his much awaited return as Batman...{" "}
            <a className="text-blue-500" href="#">
              Continue Reading
            </a>
          </p>
        </div>
      </div>
      <div className="flex place-content-center">
        <button
          type="button"
          className="flex mb-4 rounded-3xl self-center px-6 py-2.5 bg-blue-200 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:text-gray-200 hover:bg-blue-500 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out dark:bg-gray-300 text-black"
        >
          <a href="/reviews">See More News ➡️</a>
        </button>
      </div>
      </div>
      <div className="mb-5 shadow-lg bg-blue-400 text-gray-700 text-center dark:bg-blue-700 text-black">
        <h2 className="font-semibold text-xl bg-white text-black">
          Newest DCUnerds! Review:
        </h2>
        <div className="flex flex-col text-center items-center">
          <div className="mb-1 rounded-lg shadow-lg bg-white text-black">
            <a href="#!">
              <img
                className="object-cover"
                src="https://www.dc.com/sites/default/files/Marquee_SuperSons_63604ef9250065.21638518.jpg"
                alt="Robin and Jon look at the camera"
              />
            </a>
            <div className="flex bg-white rounded-xl items-center justify-center">
              <h2 className="text-2xl">
                'Batman and Superman: Battle of the Super Sons'
              </h2>
            </div>
          </div>
          <p className="p-2 m-2 rounded-lg text-xs text-black bg-blue-200">
            Battle of The Super Sons starts slow but builds into a fun and
            heartfelt... <a className="text-blue-500">Continue Reading</a>
          </p>
          <button
            type="button"
            className="flex mb-4 rounded-3xl items-center px-6 py-2.5 bg-blue-200 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-500 hover:text-gray-200 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out dark:bg-gray-300 text-black"
          >
            <a href="/reviews">See More Reviews ➡️</a>
          </button>
        </div>
      </div>

      <div className="p-3 mb-3 shadow-lg rounded-lg bg-blue-400 text-gray-700 text-center dark:bg-blue-700 text-black">
        <h2 className="font-semibold text-xl rounded-lg bg-blue-200 text-black dark:bg-black text-white">
          View the DCU Timeline:
        </h2>
        <div className="flex flex-col text-center items-center p-2">
          <div className="mb-1 rounded-lg shadow-lg bg-white dark:bg-black text-white">
            <a href="#!">
              <img
                className="object-cover"
                src="fullSlate.JPG"
                alt="Batman smiles at the camera"
              />
            </a>
          </div>
          <p className="p-2 mb-1 rounded-lg text-xs text-black bg-blue-200">
            credit: heroes reforged | view the full picture{" "}
            <a
              href="https://www.instagram.com/p/CoGl0btrbaI/?hl=en"
              className="text-cyan-500 dark:text-black underline"
            >
              here
            </a>
          </p>
          <button
            type="button"
            className="flex items-center px-6 py-2.5 bg-blue-200 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out dark:bg-gray-300 text-black"
          >
            <a href="/news">See the Full Timeline ➡️</a>
          </button>
        </div>
      </div>
    </main>
  );
}
