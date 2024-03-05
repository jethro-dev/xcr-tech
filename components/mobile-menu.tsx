import React from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "./ui/button";
import {
  ArrowLeft,
  ArrowRight,
  Instagram,
  Linkedin,
  Menu,
  Twitter,
  Youtube,
} from "lucide-react";
import { useMediaQuery } from "usehooks-ts";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

type Props = {};

export const MobileMenu = (props: Props) => {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) return null;

  return (
    <Drawer direction={"right"}>
      <DrawerTrigger className="block md:hidden">
        <Menu className="h-6 w-6 text-white" />
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <div className="flex items-center gap-2">
            <span className="text-sm font-light text-muted-foreground">
              Swipe to close
            </span>
            <ArrowRight className="h-4 w-4 text-muted-foreground" />
          </div>
          <h3 className="text-2xl font-bold font-akony text-primary text-left">
            XCR Tech
          </h3>
        </DrawerHeader>
        <div className="px-4 space-y-2">
          <Accordion type="multiple" className="space-y-2">
            <AccordionItem value="item-1" className="border-none">
              <Button
                asChild
                className="justify-between bg-white hover:no-underline text-base font-medium"
                variant={"secondary"}
              >
                <AccordionTrigger>Services</AccordionTrigger>
              </Button>
              <AccordionContent className="flex flex-col gap-1 ml-4">
                <Button
                  asChild
                  className="justify-start bg-white text-base font-medium"
                  variant={"secondary"}
                >
                  <Link
                    href={`/services/argumented-reality`}
                    className="text-left hover:cursor-pointer"
                  >
                    {" "}
                    Argumented Reality
                  </Link>
                </Button>
                <Button
                  asChild
                  className="justify-start bg-white text-base font-medium"
                  variant={"secondary"}
                >
                  <Link
                    href={`/services/virtual-reality`}
                    className="text-left hover:cursor-pointer"
                  >
                    {" "}
                    Virtual Reality
                  </Link>
                </Button>
                <Button
                  asChild
                  className="justify-start bg-white text-base font-medium"
                  variant={"secondary"}
                >
                  <Link
                    href={`/services/artificial-intelligence`}
                    className="text-left hover:cursor-pointer"
                  >
                    {" "}
                    Artificial Intelligence
                  </Link>
                </Button>
                <Button
                  asChild
                  className="justify-start bg-white text-base font-medium"
                  variant={"secondary"}
                >
                  <Link
                    href={`/services`}
                    className="text-left hover:cursor-pointer "
                  >
                    All services
                  </Link>
                </Button>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border-none">
              <Button
                asChild
                className="justify-between bg-white hover:no-underline text-base font-medium"
                variant={"secondary"}
              >
                <AccordionTrigger>About us</AccordionTrigger>
              </Button>
              <AccordionContent className="flex flex-col gap-1 ml-4">
                <Button
                  asChild
                  className="justify-start bg-white text-base font-medium"
                  variant={"secondary"}
                >
                  <Link
                    href={`/services/how-we-work`}
                    className="text-left hover:cursor-pointer"
                  >
                    How we work
                  </Link>
                </Button>
                <Button
                  asChild
                  className="justify-start bg-white text-base font-medium"
                  variant={"secondary"}
                >
                  <Link
                    href={`/services/career`}
                    className="text-left hover:cursor-pointer"
                  >
                    Career
                  </Link>
                </Button>
                <Button
                  asChild
                  className="justify-start bg-white text-base font-medium"
                  variant={"secondary"}
                >
                  <Link
                    href={`/services/meet-our-team`}
                    className="text-left hover:cursor-pointer"
                  >
                    Meet Our Team
                  </Link>
                </Button>
                <Button
                  asChild
                  className="justify-start bg-white text-base font-medium"
                  variant={"secondary"}
                >
                  <Link
                    href={`/services`}
                    className="text-left hover:cursor-pointer"
                  >
                    {" "}
                    All services
                  </Link>
                </Button>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Button
            variant={"secondary"}
            className="bg-white w-full justify-start text-base font-medium"
            asChild
          >
            <Link href={"/blogs"}>Blogs</Link>
          </Button>
        </div>
        <DrawerFooter className="flex flex-row justify-between gap-4">
          <div className="flex flex-col">
            <h3 className="text-2xl font-bold font-akony">XCR Tech</h3>
            <p className="mt-2 font-light text-sm">
              We deliver, we execute, and we are confident to make the best out
              of the best.
            </p>
            <Button className="w-full mt-auto">Contact us</Button>
          </div>
          <ol className="space-y-2">
            <li className="">
              <Button size={"icon"} variant={"ghost"} className="rounded-full">
                <Linkedin className="h-4 w-4" />
              </Button>
            </li>
            <li>
              <Button size={"icon"} variant={"ghost"} className="rounded-full">
                <Instagram className="h-4 w-4" />
              </Button>
            </li>
            <li>
              <Button size={"icon"} variant={"ghost"} className="rounded-full">
                <Youtube className="h-4 w-4" />
              </Button>
            </li>
            <li>
              <Button size={"icon"} variant={"ghost"} className="rounded-full">
                <Twitter className="h-4 w-4" />
              </Button>
            </li>
          </ol>

          {/* <DrawerClose>
            <Button variant="outline">Cancel</Button>
          </DrawerClose> */}
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
