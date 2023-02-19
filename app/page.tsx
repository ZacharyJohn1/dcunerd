export default function Home() {
  return (
    <main className="py-4 px-48">
      <div className="p-6 shadow-lg rounded-lg bg-gray-100 text-gray-700 text-center">
        <h2 className="font-semibold text-3xl mb-5">Welcome to DCUNerds!</h2>
        <p>
          This is a place for fans of James Gunn's DC Universe to gather and
          share ideas. I am so excited to grow alongside this amazing universe!
        </p>
      </div>
      <div className="flex items-stretch justify-evenly">
        <div className="m-4 flex text-center">
          <div className="rounded-lg shadow-lg bg-white dark:bg-black">
            <a href="#!">
              <img
                className="rounded-t-lg w-fit ml-12 h-2/5 w-max"
                src="https://www.supermansupersite.com/olsen2.gif"
                alt="Jimmy Olsen holds a camera"
              />
            </a>
            <div className="p-6">
              <h5 className="text-gray-900 text-xl font-medium mb-2 dark:text-white">
                News
              </h5>
              <p className="text-gray-700 text-base mb-4">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <button
                type="button"
                className="align-center inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out dark:bg-gray-300 text-black"
              >
                Read On
              </button>
            </div>
          </div>
        </div>
        <div className="m-4 flex text-center">
          <div className="rounded-lg shadow-lg bg-white dark:bg-black">
            <a href="#!">
              <img
                className="rounded-t-lg"
                src="https://www.lascimmiapensa.com/wp-content/uploads/2021/12/the-batman.jpg"
                alt=""
              />
            </a>
            <div className="p-6">
              <h5 className="text-gray-900 text-xl font-medium mb-2 dark:text-white">
                Reviews
              </h5>
              <p className="text-gray-700 text-base mb-4">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <button
                type="button"
                className="align-center inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out dark:bg-gray-300 text-black"
              >
                Read On
              </button>
            </div>
          </div>
        </div>
        <div className="m-4 flex text-center">
          <div className="rounded-lg shadow-lg bg-white dark:bg-black">
            <a href="#!">
              <img
                className="rounded-t-lg "
                src="https://www.dc.com/sites/default/files/FLSPv2_Cv1_R1_marquee_57ef19df8d0256.03779299.jpg"
                alt=""
              />
            </a>
            <div className="p-6">
              <h5 className="text-gray-900 text-xl font-medium mb-2 dark:text-white">
                Timeline
              </h5>
              <p className="text-gray-700 text-base mb-4">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <button
                type="button"
                className="align-center inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out dark:bg-gray-300 text-black"
              >
                Read On
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
