export default function Home() {
  return (
    <main className="py-4 px-4">
      <div className="p-6 mb-3 shadow-lg rounded-lg bg-gray-100 text-gray-700 text-center dark:bg-gray-500 text-white">
        <h2 className="font-semibold text-3xl">Welcome to DCUNerds!</h2>
        <p>
          This is a place for fans of James Gunn's DC Universe to gather and
          share ideas. I am so excited to grow alongside this amazing universe!
        </p>
      </div>
      <div className="flex flex-col shadow-inner md:flex-row items-stretch justify-evenly m-1">
        <div className="flex text-center items-center p-6 mb-3">
          <div className="rounded-lg shadow-lg bg-white dark:bg-black">
            <a href="#!">
              <img
                className="object-fill"
                src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4d951c98-bb9c-42db-bbe8-4ba454ae6c9f/ddbiccb-260e9c58-2c9f-42c3-9da8-3b9b231286ed.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzRkOTUxYzk4LWJiOWMtNDJkYi1iYmU4LTRiYTQ1NGFlNmM5ZlwvZGRiaWNjYi0yNjBlOWM1OC0yYzlmLTQyYzMtOWRhOC0zYjliMjMxMjg2ZWQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.DjrJeezM6JUV-FSx7abaJbSMnr7ktJQ3Ggr9FW5r0tA"
                alt="Jimmy Olsen holds a camera"
              />
            </a>
            <div className="mt-4 flex items-center justify-center">
              <button
                type="button"
                className="flex items-center px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out dark:bg-gray-300 text-black"
              >
                News
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-center p-6 mb-3">
          <div className="rounded-lg shadow-lg bg-white dark:bg-black">
            <a href="#!">
              <img
                className="object-fill"
                src="https://www.lascimmiapensa.com/wp-content/uploads/2021/12/the-batman.jpg"
                alt=""
              />
            </a>
            <div className="mt-4 flex items-center justify-center">
              <button
                type="button"
                className="align-center inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out dark:bg-gray-300 text-black"
              >
                Reviews
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center p-6 mb-1">
          <div className="rounded-lg shadow-lg bg-white dark:bg-black">
            <a href="#!">
              <img
                className="object-fill"
                src="https://www.dc.com/sites/default/files/FLSPv2_Cv1_R1_marquee_57ef19df8d0256.03779299.jpg"
                alt=""
              />
            </a>
            <div className="mt-4 flex items-center justify-center">
              <button
                type="button"
                className="align-center inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out dark:bg-gray-300 text-black"
              >
                Timeline
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="sm:p-2 shadow-lg rounded-lg bg-blue text-gray-700 text-center dark:bg-gray-500 text-white">
        <h2 className="text-l sm:font-semibold text-3xl">
          What's next in the DCU!
        </h2>
        <img src="fullSlate.JPG"></img>
        <p className="text-xs">
          credit: heroes reforged | view the full picture{" "}
          <a
            href="https://www.instagram.com/p/CoGl0btrbaI/?hl=en"
            className="text-cyan-500"
          >
            here
          </a>
        </p>
      </div>
    </main>
  );
}
