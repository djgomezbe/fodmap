import { signOutAction } from "@/app/actions";
import { hasEnvVars } from "@/utils/supabase/check-env-vars";
import Link from "next/link";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { createClient } from "@/utils/supabase/server";

export default async function AuthButton() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!hasEnvVars) {
    return (
      <>
        <div className="flex gap-4 items-center max-lg:hidden">
          <div className="flex gap-2">
            <button className="text-green-600 hover:text-white border border-green-600 bg-white hover:bg-green-600/90 focus:ring-4 focus:outline-none focus:ring-green-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:border-green-500 dark:bg-black dark:text-white dark:hover:text-white dark:hover:bg-green-500  dark:focus:ring-green-800">
              <Link href="/sign-in">Aanmelden</Link>
            </button>
            <button className="text-green-600 hover:text-white border border-green-600 bg-white hover:bg-green-600/90 focus:ring-4 focus:outline-none focus:ring-green-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:border-green-500 dark:bg-black dark:text-white dark:hover:text-white dark:hover:bg-green-500  dark:focus:ring-green-800">
              <Link href="/sign-up">Registreer</Link>
            </button>
          </div>
        </div>
      </>
    );
  }
  return user ? (
    <div className="flex items-center gap-4 mt-2 max-lg:hidden">
      Hey, {user.email}!
      <form action={signOutAction}>
        <button
          type="submit"
          className="text-green-600 hover:text-white border border-green-600 bg-white hover:bg-green-600/90 focus:ring-4 focus:outline-none focus:ring-green-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:border-green-500 dark:bg-black dark:text-white dark:hover:text-white dark:hover:bg-green-500  dark:focus:ring-green-800"
        >
          Afmelden
        </button>
      </form>
    </div>
  ) : (
    <div className="flex gap-2 mt-2 max-lg:hidden">
      <button className="text-green-600 hover:text-white border border-green-600 bg-white hover:bg-green-600/90 focus:ring-4 focus:outline-none focus:ring-green-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:border-green-500 dark:bg-black dark:text-white dark:hover:text-white dark:hover:bg-green-500  dark:focus:ring-green-800">
        <Link href="/sign-in">Aanmelden</Link>
      </button>
      <button className="text-green-600 hover:text-white border border-green-600 bg-white hover:bg-green-600/90 focus:ring-4 focus:outline-none focus:ring-green-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:border-green-500 dark:bg-black dark:text-white dark:hover:text-white dark:hover:bg-green-500  dark:focus:ring-green-800">
        <Link href="/sign-up">Registreer</Link>
      </button>
    </div>
  );
}
