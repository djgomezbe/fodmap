import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import Hero from "@/components/hero";
import Link from "next/link";

export default async function Home() {
  return (
    <main>
      <div className="mx-auto max-w-2xl p-1 sm:py-48 lg:p-1">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
            Onze app launched op 20 April 2025!.
            <a href="fodmap.html" className="font-semibold text-green-600">
              <span className="absolute inset-0" aria-hidden="true"></span>Lees
              meer<span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
        <div className="text-center">
          <h1 className="text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
            Jouw Partner in een Gezond FODMAP-dieet!
          </h1>
          <p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
            Heb je last van spijsverteringsproblemen of volg je een
            FODMAP-dieet? Maak kennis met Fodmap Tracker, dé app die het
            eenvoudiger maakt om je dieet te beheren en je gezondheid te
            verbeteren.
          </p>
        </div>
      </div>
    </main>
  );
}
