import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Separator } from "./ui/separator";
import { Instagram, Linkedin, Twitter, X, Youtube } from "lucide-react";

type Props = {};

export const Footer = (props: Props) => {
  return (
    <footer className="bg-white border-t">
      <div className="container">
        <div className="py-10 flex flex-col md:flex-row gap-20">
          <div className="w-full max-w-sm">
            <Link href={"/"} className="text-3xl font-bold font-akony">
              XCR TECH
            </Link>
            <p className="mt-2 text-sm text-muted-foreground">
              We deliver, we execute, and we are confident to make the best out
              of the best.
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-between w-full gap-10">
            <div className="">
              <p className="font-semibold px-4">Features</p>
              <ol className="mt-6">
                <li>
                  <Button
                    variant={"ghost"}
                    className="w-full justify-start"
                    asChild
                  >
                    <Link href={"/"} className="text-sm text-muted-foreground">
                      How We Work
                    </Link>
                  </Button>
                </li>
                <li>
                  <Button
                    variant={"ghost"}
                    className="w-full justify-start"
                    asChild
                  >
                    <Link href={"/"} className="text-sm text-muted-foreground">
                      Pricing
                    </Link>
                  </Button>
                </li>
              </ol>
            </div>
            <div className="">
              <p className="font-semibold px-4">Resources</p>
              <ol className="mt-6">
                <li>
                  <Button
                    variant={"ghost"}
                    className="w-full justify-start"
                    asChild
                  >
                    <Link href={"/"} className="text-sm text-muted-foreground">
                      Blogs
                    </Link>
                  </Button>
                </li>
                <li>
                  <Button
                    variant={"ghost"}
                    className="w-full justify-start"
                    asChild
                  >
                    <Link href={"/"} className="text-sm text-muted-foreground">
                      How It Works
                    </Link>
                  </Button>
                </li>
                <li>
                  <Button
                    variant={"ghost"}
                    className="w-full justify-start"
                    asChild
                  >
                    <Link href={"/"} className="text-sm text-muted-foreground">
                      Lorem
                    </Link>
                  </Button>
                </li>
                <li>
                  <Button
                    variant={"ghost"}
                    className="w-full justify-start"
                    asChild
                  >
                    <Link href={"/"} className="text-sm text-muted-foreground">
                      Ipsum
                    </Link>
                  </Button>
                </li>
              </ol>
            </div>
            <div className="">
              <p className="font-semibold px-4">Company</p>
              <ol className="mt-6">
                <li>
                  <Button
                    variant={"ghost"}
                    className="w-full justify-start"
                    asChild
                  >
                    <Link href={"/"} className="text-sm text-muted-foreground">
                      About Us
                    </Link>
                  </Button>
                </li>
                <li>
                  <Button
                    variant={"ghost"}
                    className="w-full justify-start"
                    asChild
                  >
                    <Link href={"/"} className="text-sm text-muted-foreground">
                      Career
                    </Link>
                  </Button>
                </li>
                <li>
                  <Button
                    variant={"ghost"}
                    className="w-full justify-start"
                    asChild
                  >
                    <Link href={"/"} className="text-sm text-muted-foreground">
                      Linkedin
                    </Link>
                  </Button>
                </li>
              </ol>
            </div>
            <div className="">
              <ol className="flex lg:flex-col flex-row items-center gap-2">
                <li>
                  <Button
                    size={"icon"}
                    variant={"ghost"}
                    className="rounded-full"
                  >
                    <Linkedin className="h-4 w-4" />
                  </Button>
                </li>
                <li>
                  <Button
                    size={"icon"}
                    variant={"ghost"}
                    className="rounded-full"
                  >
                    <Instagram className="h-4 w-4" />
                  </Button>
                </li>
                <li>
                  <Button
                    size={"icon"}
                    variant={"ghost"}
                    className="rounded-full"
                  >
                    <Youtube className="h-4 w-4" />
                  </Button>
                </li>
                <li>
                  <Button
                    size={"icon"}
                    variant={"ghost"}
                    className="rounded-full"
                  >
                    <Twitter className="h-4 w-4" />
                  </Button>
                </li>
              </ol>
            </div>
          </div>
        </div>
        <Separator />
        <div className="py-4 flex justify-between items-center">
          <span className="text-xs font-light">
            XCR Tech. All right reserved.
          </span>
          <Link
            href={"/privacy"}
            className="text-xs font-light hover:underline"
          >
            Privacy
          </Link>
        </div>
      </div>
    </footer>
  );
};
