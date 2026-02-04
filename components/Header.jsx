"use client";

import { SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import EventKothaeBtn from "./EventKothaeBtn";
import { Authenticated, Unauthenticated } from "convex/react";

export default function Header() {
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
          <Authenticated>
            <UserButton />
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
    </nav>

    //
  );
}
