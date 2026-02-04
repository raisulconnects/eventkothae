"use client";

import { SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import EventKothaeBtn from "./EventKothaeBtn";
import { Authenticated, Unauthenticated } from "convex/react";
import { BarLoader } from "react-spinners";
import { useStoreUser } from "@/hooks/use-store-user";
import EventKothaeBtn2 from "./EventKothaeBtn2";
import Link from "next/link";
import { Building, Plus, Ticket } from "lucide-react";

export default function Header() {
  const { isLoading } = useStoreUser();

  return (
    <nav className="sticky top-0 z-50 bg-black/60 backdrop-blur-xl border-b border-white/10 text-white py-5">
      <div className="flex justify-between items-center px-30">
        <div>
          {/* Logo Comes Here - For Now just using text*/}
          Event Kothae?
        </div>

        {/* Search bar - desktop only */}
        {/* <div></div> */}

        {/* pricing explore signin btn */}

        <div className="flex justify-center items-center gap-10">
          <EventKothaeBtn2>
            <Link href={"/explore"}>Explore</Link>
          </EventKothaeBtn2>

          <Authenticated>
            <EventKothaeBtn2>
              <Plus />
              <span className="hidden sm:inline">Create Event?</span>
            </EventKothaeBtn2>
            <UserButton>
              <UserButton.MenuItems>
                <UserButton.Link
                  label="My Tickets"
                  labelIcon={<Ticket size={16} />}
                  href="/my-tickets"
                />
                <UserButton.Link
                  label="My Events"
                  labelIcon={<Building size={16} />}
                  href="/my-events"
                />
              </UserButton.MenuItems>
            </UserButton>
          </Authenticated>

          <Unauthenticated>
            <SignInButton mode="modal">
              <EventKothaeBtn>Sign In</EventKothaeBtn>
            </SignInButton>
            <SignUpButton mode="modal">
              <EventKothaeBtn>Sign Up</EventKothaeBtn>
            </SignUpButton>
          </Unauthenticated>
        </div>
      </div>
      {/* Search bar - mobile only */}
      {isLoading && (
        <div className="absolute bottom-0 left-0 w-full">
          <BarLoader width={"100%"} color="#a855f7" />
        </div>
      )}
    </nav>

    //
  );
}
