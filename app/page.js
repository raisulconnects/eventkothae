import EventKothaeBtn2 from "@/components/EventKothaeBtn2";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-black">
      {/* Glow background */}
      <div className="absolute -top-40 -left-40 h-[400px] w-[400px] rounded-full bg-purple-600/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-blue-600/20 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-20 md:grid-cols-2">
        {/* Left */}
        <div className="space-y-6">
          <h1 className="text-4xl font-extrabold leading-tight text-white md:text-5xl lg:text-6xl">
            Welcome to{" "}
            <span className="bg-linear-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              EventKothae!
            </span>
          </h1>

          <p className="max-w-xl text-lg text-gray-300">
            Discover events happening near you or create your own and bring
            people together! All in one place.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <EventKothaeBtn2>
              <Link href={"/explore"}>Explore Events</Link>
            </EventKothaeBtn2>
            {/* <EventKothaeBtn2>
              {" "}
              <Link>Host an Event </Link>
            </EventKothaeBtn2> */}
          </div>
        </div>

        {/* Right */}
        <div className="relative flex justify-center">
          <div className="absolute inset-0 rounded-3xl bg-linear-to-tr from-purple-500/20 to-blue-500/20 blur-2xl" />
          <Image
            src="/images/forLandingPage.avif"
            alt="Event discovery illustration"
            width={520}
            height={420}
            priority
            className="relative rounded-3xl drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
