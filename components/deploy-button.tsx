import Link from "next/link";
import { Button } from "./ui/button";

export default function DeployButton() {
  return (
    <>
      <div className="flex gap-4 items-center mt-2 max-lg:hidden">
        <Link href="/contact/">
          <Button className=" text-green-600 hover:text-white border border-green-600 bg-white hover:bg-green-600/90 focus:ring-4 focus:outline-none focus:ring-green-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:border-green-500 dark:bg-black dark:text-white dark:hover:text-white dark:hover:bg-green-500  dark:focus:ring-green-800">
            <span>Contacteer Ons</span>
          </Button>
        </Link>
      </div>
    </>
  );
}
