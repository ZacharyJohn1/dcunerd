import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body>
        <nav className="bg-white shadow dark:bg-gray-800 w-full h-[75px]">
          <div className="container flex items-center justify-evenly p-6 mx-auto text-gray-600 dark:text-gray-300 h-[75px]">
            <a href="#" className="text-gray-800 dark:text-gray-200">
              Home
            </a>

            <a
              href="#"
              className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 mx-1.5 sm:mx-6"
            >
              Reviews
            </a>
            <a href="#">
              <img
                src="mainlogo.png"
                className="rounded-full w-[70px] h-[70px]"
              />
            </a>
            <a
              href="#"
              className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 mx-1.5 sm:mx-6"
            >
              News
            </a>

            <a
              href="#"
              className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 mx-1.5 sm:mx-6"
            >
              Timeline
            </a>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
