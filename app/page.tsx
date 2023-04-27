import NewsCard from "./NewsCard";
import ReviewCard from "./ReviewCard";

export default function Home() {
  return (
    <main className="px-2 py-4">
      <NewsCard
        image="https://consequence.net/wp-content/uploads/2021/12/peacemaker-trailer-hbo-max-new.png"
        title="Waller First. <br></br>Peacemaker After."
        description="Sounds like 'Peacemaker' fans will have to wait until after Waller to have their questions..."
        link="#"
      />

      <ReviewCard
        image="https://m.media-amazon.com/images/M/MV5BZjU0MjBmZTgtYzE2Mi00NTdmLWE4M2QtM2Y0Y2JjMTQ0NTkwXkEyXkFqcGdeQXVyOTc5MDI5NjE@._V1_.jpg"
        title="'Legion of Super Heroes' <br></br>★☆☆☆☆"
        description="Legion of Superheroes tries to tell the story of a broken woman but falls flat where it counts..."
        link="#"
      />

      <div className="mb-2">
        <div className="flex px-4 place-content-center">
          <h2 className="flex lg:h-1/2 rounded-lg font-semibold items-center justify-center text-center text-3xl bg-blue-400 mb-4 h-[40px] w-full dark:text-black">
            Latest in News:
          </h2>
        </div>
        <div className="lg:flex">
          <div className="lg:w-1/2 rounded-xl mx-5 mb-5 shadow-lg bg-blue-400 text-gray-700 text-center dark:bg-blue-700 text-black">
            <div className="flex rounded-xl flex-col text-center items-center">
              <div className="mb-1 rounded-xl shadow-lg bg-white text-black">
                <a href="#!">
                  <img
                    className="object-cover rounded-t-xl"
                    src="https://consequence.net/wp-content/uploads/2021/12/peacemaker-trailer-hbo-max-new.png"
                    alt="Peacemaker and friend dive through the air"
                  />
                </a>
                <div className="flex bg-white items-center justify-center">
                  <a href="#!">
                    <h2 className="text-2xl">
                      Waller First. <br></br>Peacemaker After.
                    </h2>
                  </a>
                </div>
              </div>
              <p className="p-2 m-2 rounded-xl text-xs text-black bg-blue-200">
                Sounds like 'Peacemaker' fans will have to wait until after
                Waller to have their questions...{" "}
                <a className="text-blue-500" href="#">
                  Continue Reading
                </a>
              </p>
            </div>
          </div>
          <div className="lg:w-1/2 rounded-xl mx-5 mb-5 shadow-lg bg-blue-400 text-gray-700 text-center dark:bg-blue-700 text-black">
            <div className="flex rounded-xl flex-col text-center items-center">
              <div className="mb-1 rounded-xl shadow-lg bg-white text-black">
                <a href="#!">
                  <img
                    className="object-cover rounded-t-xl"
                    src="https://www.digitaltrends.com/wp-content/uploads/2022/05/dc-comics-nightwing.jpg?p=1"
                    alt="Nightwing gives a smug look as he falls through the air"
                  />
                </a>
                <div className="flex bg-white items-center justify-center">
                  <a href="#!">
                    <h2 className="text-2xl">
                      James Gunn Teases 5 New Heroes in the new DCU
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
          <div className="lg:w-1/2 rounded-xl mx-5 mb-5 shadow-lg bg-blue-400 text-gray-700 text-center dark:bg-blue-700 text-black">
            <div className="flex rounded-xl flex-col text-center items-center">
              <div className="mb-1 rounded-xl shadow-lg bg-white text-black">
                <a href="#!">
                  <img
                    className="object-cover rounded-t-xl"
                    src="keats.png"
                    alt="Keaton grins at the camera"
                  />
                </a>
                <div className="flex bg-white items-center justify-center">
                  <a href="#!">
                    <h2 className="text-2xl">
                      New Trailer for 'The Flash' Drops During Superbowl
                    </h2>
                  </a>
                </div>
              </div>
              <p className="p-2 m-2 rounded-xl text-xs text-black bg-blue-200">
                Keaton makes his much awaited return and Calle stuns as
                Supergirl in 'The Flash' trailer...{" "}
                <a className="text-blue-500" href="#">
                  Continue Reading
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="flex place-content-center">
          <button
            type="button"
            className="flex lg:h-1/2 lg:text-xl lg:items-center mb-4 rounded-3xl self-center px-6 py-2.5 bg-blue-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:text-gray-200 hover:bg-blue-500 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out dark:bg-gray-300 text-black"
          >
            <a href="/news">See More News ➡️</a>
          </button>
        </div>
      </div>
      <div className="flex px-4 place-content-center">
        <h2 className="flex lg:h-1/2 rounded-lg font-semibold items-center justify-center text-center text-3xl bg-blue-400 mb-4 h-[40px] lg:h-full w-full dark:text-black">
          Latest Reviews:
        </h2>
      </div>
      <div className="lg:flex">
        <div className="flex lg:w-1/2 rounded-xl mx-5 mb-5 shadow-lg bg-blue-400 text-gray-700 text-center dark:bg-blue-700 text-black">
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
                  <h2 className="text-2xl">
                    'Legion of Super Heroes' <br></br> ★☆☆☆☆
                  </h2>
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
        <div className="lg:flex-2 lg:w-1/2 rounded-xl mx-5 mb-5 shadow-lg bg-blue-400 text-gray-700 text-center dark:bg-blue-700 text-black">
          <div className="flex rounded-xl flex-col text-center items-center">
            <div className="mb-1 rounded-xl shadow-lg bg-white text-black">
              <a href="#!">
                <img
                  className="object-cover rounded-t-xl"
                  src="https://static.dc.com/dc/files/default_images/Marquee_BattleSS_634dfc52e28494.28734919.jpg?w=1200"
                  alt="Robin and Jon look at the camera"
                />
              </a>
              <div className="flex bg-white items-center justify-center">
                <a href="#!">
                  <h2 className="text-2xl lg:text-xl">
                    'Batman and Superman: Battle of the Super Sons' <br></br>
                    <div className="lg:text-2xl">★★★☆☆</div>
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

        <div className="lg:flex-2 lg:w-1/2 rounded-xl mx-5 mb-5 shadow-lg bg-blue-400 text-gray-700 text-center dark:bg-blue-700 text-black">
          <div className="flex rounded-xl flex-col text-center items-center">
            <div className="mb-1 rounded-xl shadow-lg bg-white text-black">
              <a href="#!">
                <img
                  className="object-cover rounded-t-xl"
                  src="https://images.squarespace-cdn.com/content/v1/51b3dc8ee4b051b96ceb10de/75bc5be3-5a27-4778-942b-3d17847a3593/Screen+Shot+2022-05-09+at+3.45.40+PM.png"
                  alt="Green Lanter and Green Arrow look baffled"
                />
              </a>
              <div className="flex bg-white items-center justify-center">
                <a href="#!">
                  <h2 className="text-2xl">
                    'Green Lantern: Beware My Power'<br></br>
                    ★★★☆☆
                  </h2>
                </a>
              </div>
            </div>
            <p className="p-2 m-2 rounded-xl text-xs text-black bg-blue-200">
              'Beware my Power' is a solid movie following a fun and personable
              hero...{" "}
              <a className="text-blue-500" href="#">
                Continue Reading
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="flex place-content-center">
        <button
          type="button"
          className="flex mb-4 lg:text-xl rounded-3xl self-center px-6 py-2.5 bg-blue-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:text-gray-200 hover:bg-blue-500 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out dark:bg-gray-300 text-black"
        >
          <a href="/reviews">See More Reviews ➡️</a>
        </button>
      </div>
    </main>
  );
}
