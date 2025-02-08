import Link from "next/link";

export default function Hero() {
  return (
    <>
      <div className="max-xl:hidden">
        <div id="sidebar">
          <div id="sidebar-item" className="rounded-md">
            <button className="text-green-600 hover:text-white border border-green-600 bg-white hover:bg-green-600/90 focus:ring-4 focus:outline-none focus:ring-green-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:border-green-500 dark:bg-black dark:text-white dark:hover:text-white dark:hover:bg-green-500  dark:focus:ring-green-800">
              <Link href="/recipes/">Recepten</Link>
            </button>
          </div>
          <div id="sidebar-item" className="rounded-md">
            <button className="text-green-600 hover:text-white border border-green-600 bg-white hover:bg-green-600/90 focus:ring-4 focus:outline-none focus:ring-green-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:border-green-500 dark:bg-black dark:text-white dark:hover:text-white dark:hover:bg-green-500  dark:focus:ring-green-800">
              <Link href="/about/">Over ons</Link>
            </button>
          </div>
          <div id="sidebar-item" className="rounded-md">
            <button className="text-green-600 hover:text-white border border-green-600 bg-white hover:bg-green-600/90 focus:ring-4 focus:outline-none focus:ring-green-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:border-green-500 dark:bg-black dark:text-white dark:hover:text-white dark:hover:bg-green-500  dark:focus:ring-green-800">
              <Link href="/profile/">Mijn Profiel</Link>
            </button>
          </div>
          <div id="sidebar-item" className="rounded-md">
            <button className="text-green-600 hover:text-white border border-green-600 bg-white hover:bg-green-600/90 focus:ring-4 focus:outline-none focus:ring-green-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:border-green-500 dark:bg-black dark:text-white dark:hover:text-white dark:hover:bg-green-500  dark:focus:ring-green-800">
              <Link href="/editProfile/">Wijzig Profiel</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
