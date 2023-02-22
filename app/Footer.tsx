import Link from 'next/link';

export default function Footer () {
    return(
        <div className='flex pt-2 place-content-center bg-blue-400 shadow dark:bg-blue-700 w-full h-[50px]'>
            <Link href="https://twitter.com/DCUnerds"> <svg className="flex h-8 w-8 text-white"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" /></svg></Link>
            <Link href="twitch.com"><svg className="ml-3 h-8 w-8 text-white"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M21 2H3v16h5v4l4-4h5l4-4V2zM11 11V7M16 11V7" /></svg></Link>
        </div>
    )
}