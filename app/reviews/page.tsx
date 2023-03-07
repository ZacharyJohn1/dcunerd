export default function Reviews() {
  return (
    <main className="py-4 px-48">
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
                    'Legion of Super Heroes' <br></br>{" "}★☆☆☆☆
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

      
    </main>
  );
}
