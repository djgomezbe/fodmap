import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import recipeCard from "@/components/recipeCard";
import Image from "next/image";
import Link from "next/link";

export default async function editProfile() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/sign-in");
  }

  return (
    <>
      <div>
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
              <Link href="/editProfile/">Wijzig Profiel</Link>
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-center max-w-md bg-green-200 border-green-600 border-solid border-2 rounded-xl p-10 text-center align-middle justify-center">
        <form action="">
          <div className="relative align-middle text-right">
            <label htmlFor="Username">gebruiksnaam</label>
            <input type="text" />
            <label htmlFor="FullName">Volledige Naam</label>
            <input type="text" />
            <label htmlFor="DateOfBirth">Geboortedatum</label>
            <input type="date" />
            <label htmlFor="dietType">Dieet-voorkeuren</label>
            <select name="dietTypes" id="diets">
              <option value="">Selecteer je voorkeur</option>
              <option value="Vegan">Vegan</option>
              <option value="vegetarian">Vegetarier</option>
              <option value="gluten">Glutenvrij</option>
              <option value="Pescotarian">Pescotarian</option>
              <option value="Paleo">Paleo</option>
              <option value="Keto">Keto</option>
              <option value="LowFodmap">Low-Fodmap</option>
              <option value="SugarFree">Suikervrij</option>
              <option value="Histamine">Histamine-arm</option>
              <option value="Nuts">Notenvrij</option>
              <option value="Eggs">Eivrij</option>
              <option value="Soya">Soyavrij</option>
              <option value="Salicylaat">Low-Salicylaat</option>
              <option value="Meditarian">Meditarian</option>
            </select>
            <button className="bg-green-600 p-2 rounded text-white items-center mx-2 gap-2 hover:bg-green-600/90">
              Opslaan
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
