export default function Timeline() {
  return (
    <main className="py-4 px-48">
      <div className="p-3 mb-3 shadow-lg rounded-lg bg-blue-400 text-gray-700 text-center dark:bg-blue-700 text-black">
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
    </main>
  );
}
