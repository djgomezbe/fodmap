import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import Link from "next/link";
import { Sidebar } from "lucide-react";
import { Button } from "@/components/ui/button";
import sidebar from "@/components/sidebar";

export default async function ProtectedPage() {
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
        <h2>Hello World</h2>
      </div>
      <div>
        <div id="sidebar">
          <div className="text-black text-center">
            <h2>Username</h2>
          </div>
          <div id="sidebar-item" className="rounded-md">
            <button>
              <Link href="/recipes/">Recepten</Link>
            </button>
          </div>
          <div id="sidebar-item" className="rounded-md">
            <button>
              <Link href="/about/">Over ons</Link>
            </button>
          </div>
          <div id="sidebar-item" className="rounded-md">
            <button>
              <Link href="/editProfile/">Wijzig Profiel</Link>
            </button>
          </div>
        </div>
      </div>

      <div className="border-solid border-2 border-green-600 m-5 p-10 rounded-xl">
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
        </>
      </div>
      <div className="w-full text-center">
        <h2>Hello World</h2>
      </div>
    </main>
  );
}
