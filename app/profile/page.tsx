import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import Hero from "@/components/hero";
import Image from "next/image";

export default async function Profile() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/sign-in");
  }

  return (
    <main>
      <div className="text-center">
        <Hero />
      </div>
      <div className="w-full bg-green-600 text-white p-10">
        <h2>Mijn Profiel</h2>
        <Image
          src="/images/happystomach.png"
          width="200"
          height="200"
          alt="happy stomach"
        />
      </div>

      <div className="border-solid border-2 border-green-600 m-5 p-10 rounded-xl text-center">
        <>
          <div>
            <h2 className="uppercase text-green-600 pb-10">
              Vul je symptomen in
            </h2>
          </div>
          <label
            htmlFor="steps-range"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Buikpijnen of krampen
          </label>
          <input
            id="steps-range"
            type="range"
            min={0}
            max={5}
            defaultValue="2.5"
            step="0.5"
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-green-700"
          />
          <label
            htmlFor="steps-range"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Diaree
          </label>
          <input
            id="steps-range"
            type="range"
            min={0}
            max={5}
            defaultValue="2.5"
            step="0.5"
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-green-700"
          />
          <label
            htmlFor="steps-range"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Constipatie
          </label>
          <input
            id="steps-range"
            type="range"
            min={0}
            max={5}
            defaultValue="2.5"
            step="0.5"
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-green-700"
          />
          <label
            htmlFor="steps-range"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Winderigheid
          </label>
          <input
            id="steps-range"
            type="range"
            min={0}
            max={5}
            defaultValue="2.5"
            step="0.5"
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-green-700"
          />
          <button className="m-5 text-green-600 hover:text-white border border-green-600 bg-white hover:bg-green-600/90 focus:ring-4 focus:outline-none focus:ring-green-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:border-green-500 dark:bg-black dark:text-white dark:hover:text-white dark:hover:bg-green-500  dark:focus:ring-green-800">
            Verzenden
          </button>
        </>
      </div>
      <div className="w-full text-center">
        <h2>Hello World</h2>
      </div>
    </main>
  );
}
