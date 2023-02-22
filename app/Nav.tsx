import Link from "next/link";

export default function Nav() {
  return (
      <nav className='bg-blue-400 shadow dark:bg-blue-700 w-full h-[75px]'>
        
      <div className="sm:visible container flex items-center justify-evenly text-gray-600 h-[75px]">
        <Link href="/">
          <p className="text-l font-semibold text-black dark:text-white">
            Home
          </p>
        </Link>

        <Link href="/news">
          <p className="text-l font-semibold text-black dark:text-white">
            News
          </p>
        </Link>
        <a href="# "className="visible flex sm:order-none">
          <img src="mainlogo.png" className="rounded-full w-[70px] h-[70px]" />
        </a>

        <Link href="/reviews">
          <p className="text-l font-semibold text-black dark:text-white">
            Reviews
          </p>
        </Link>

        <Link href="/timeline">
          <p className="text-l font-semibold text-black dark:text-white">
            Timeline
          </p>
        </Link>
      </div>
    </nav>
  );
}
