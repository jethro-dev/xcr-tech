"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
// import { Icons } from "@/components/icons";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { MobileMenu } from "./mobile-menu";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Augmented Reality (AR)",
    href: "/",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing.",
  },
  {
    title: "Virtual Reality (VR)",
    href: "/",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  },
  {
    title: "Artificial Intelligence (AI)",
    href: "/",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore?",
  },
];

export function Navbar() {
  return (
    <header className="sticky top-0 w-full z-50 bg-primary h-20">
      <div className="h-full container flex items-center justify-between">
        <Link href="/" className="text-white font-akony text-base">
          XCR TECH
        </Link>
        <NavigationMenu className="hidden md:block w-full">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href={"/services"}>
                <NavigationMenuTrigger className="bg-primary text-white relative">
                  Services
                </NavigationMenuTrigger>
              </Link>
              <NavigationMenuContent>
                <ul className="grid w-[300px] gap-3 p-4 md:w-[350px] md:grid-cols-1 lg:w-[400px] ">
                  {components.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-primary text-white">
                About us
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/about-us"
                      >
                        {/* <Icons.logo className="h-6 w-6" /> */}
                        <div className="mb-2 mt-4 text-lg font-akony">
                          XCR TECH
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Possimus rem qui astur, non minus!
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <ListItem href="/how-we-work" title="How we work">
                    Lorem ipsum, dolor sit amet consectetur adipisicing.
                  </ListItem>
                  <ListItem href="/career" title="Career">
                    Lorem ipsum dolor sit amet consectetur adipisicing.
                  </ListItem>
                  <ListItem href="/meet-our-team" title="Meet our team">
                    Laudantium distinctio aliquid fugiat veniam adipisci!
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/blogs" legacyBehavior passHref>
                <NavigationMenuLink
                  className={`bg-primary text-white ${navigationMenuTriggerStyle()}`}
                >
                  Blogs
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <Button variant={"outline"} className="hidden md:block">
          Contact Us
        </Button>
        <MobileMenu />
      </div>
    </header>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
