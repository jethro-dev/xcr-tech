import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

type Props = {};

const PlaceholderNav = (props: Props) => {
  return (
    <header className="fixed top-0 w-full z-50 h-20">
      <div className="h-full container flex items-center justify-between">
        <Link href="/" className="text-white font-akony text-base">
          XCR TECH
        </Link>
      </div>
    </header>
  );
};

export default PlaceholderNav;
