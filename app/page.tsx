
export default function Home() {
  return (
    <main className="py-4 px-48">
       <h1 className="bg-teal-700 text-black font-bold py-2 px-4 rounded-md">
      Hello world!
    </h1>
<div className="p-6 shadow-lg rounded-lg bg-gray-100 text-gray-700 justify-content-center align-items-center">
  <h2 className="font-semibold text-3xl mb-5">Hello world!</h2>
  <p>
    This is a simple hero unit, a simple jumbotron-style component for calling extra attention
    to featured content or information.
  </p>
  <hr className="my-6 border-gray-300" />
  <p>
    It uses utility classes for typography and spacing to space content out within the larger
    container.
  </p>
  <button
    type="button"
    className="inline-block px-6 py-2.5 mt-4 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
    data-mdb-ripple="true"
    data-mdb-ripple-color="light"
  >
    Learn more
  </button>
</div>
    </main>
  )
}
