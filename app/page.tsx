import Hero from "@/components/hero";
import ConnectSupabaseSteps from "@/components/tutorial/connect-supabase-steps";
import SignUpUserSteps from "@/components/tutorial/sign-up-user-steps";
import { hasEnvVars } from "@/utils/supabase/check-env-vars";
import { Button } from "../components/ui/button";
import Link from "next/link";
import { Calendar } from "lucide-react";

export default async function Home() {
  return (
    <>
      <div className="mx-auto max-w-2xl py-2 sm:py-2 lg:py-2">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          <div className="relative rounded-full px-3 py-1 text-sm/6 ring-1 ring-green-200 hover:ring-green-600">
            <p className="text-green-600">
              Onze app launched op 20 April 2025!.
            </p>
          </div>
        </div>
        <div className="text-center">
          <h1 className="text-balance text-5xl font-semibold tracking-tight sm:text-7xl">
            Jouw Partner tijdens een Gezond FODMAP-dieet!
          </h1>
          <p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
            Heb je last van spijsverteringsproblemen of volg je een
            FODMAP-dieet? Maak kennis met Fodmap Tracker, dé app die het
            eenvoudiger maakt om je dieet te beheren en je gezondheid te
            verbeteren.
          </p>
        </div>
      </div>
      <div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"></div>
      </div>
    </>
  );
}
