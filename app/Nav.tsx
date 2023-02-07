import Link from "next/link";

export default function Nav() {
  return (
    <nav className="bg-white shadow dark:bg-gray-500 w-full h-[75px]">

      <div className="container flex items-center justify-evenly p-6 mx-auto text-gray-600 h-[75px]">

        <Link href="/">
          <p className="text-xl font-semibold text-blue dark:text-black">
            Home
          </p>
        </Link>

        <Link href="/news">
          <p className="text-xl font-semibold text-blue dark:text-black">
            News
          </p>
        </Link>
        <a href="#">
          <img src="mainlogo.png" className="rounded-full w-[70px] h-[70px]" />
        </a>

        <Link href="/reviews">
          <p className="text-xl font-semibold text-blue dark:text-black">
            Reviews
          </p>
        </Link>

        <Link href="/timeline">
          <p className="text-xl font-semibold text-blue dark:text-black">
            Timeline
          </p>
        </Link>

      </div>
      
    </nav>
  );
}
